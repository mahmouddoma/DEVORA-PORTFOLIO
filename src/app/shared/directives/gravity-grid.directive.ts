import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';

interface GravityCell {
  x: number;
  y: number;
  centerX: number;
  centerY: number;
  currentDepth: number;
  currentScale: number;
  currentOpacity: number;
}

@Directive({
  selector: '[appGravityGrid]',
  standalone: true,
})
export class GravityGridDirective implements AfterViewInit, OnDestroy {
  private readonly cellSize = 76;
  private readonly influenceRadius = 180;
  private readonly maxDepth = 10;
  private readonly cells: GravityCell[] = [];
  private layer?: HTMLDivElement;
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D | null;
  private cellCanvas?: HTMLCanvasElement;
  private animationFrame?: number;
  private resizeTimer?: number;
  private targetPointerX = 0;
  private targetPointerY = 0;
  private currentPointerX = 0;
  private currentPointerY = 0;
  private isPointerActive = false;
  private isSettling = false;
  private radiusSquared = 0;

  private readonly pointerMoveHandler = (event: PointerEvent) => this.onPointerMove(event);
  private readonly pointerLeaveHandler = () => this.onPointerLeave();
  private readonly resizeHandler = () => this.scheduleBuild();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone,
  ) {
    this.radiusSquared = this.influenceRadius * this.influenceRadius;
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const host = this.elementRef.nativeElement;
    host.classList.add('gravity-section');

    this.layer = document.createElement('div');
    this.layer.className = 'gravity-grid-layer';
    this.layer.setAttribute('aria-hidden', 'true');

    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.inset = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.ctx = this.canvas.getContext('2d', { alpha: true });

    this.layer.appendChild(this.canvas);
    host.insertBefore(this.layer, host.firstChild);

    this.ngZone.runOutsideAngular(() => {
      this.buildGrid();
      window.setTimeout(() => this.buildGrid(), 240);

      host.addEventListener('pointermove', this.pointerMoveHandler, { passive: true });
      host.addEventListener('pointerleave', this.pointerLeaveHandler);
      window.addEventListener('resize', this.resizeHandler, { passive: true });
    });
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    const host = this.elementRef.nativeElement;
    host.removeEventListener('pointermove', this.pointerMoveHandler);
    host.removeEventListener('pointerleave', this.pointerLeaveHandler);
    window.removeEventListener('resize', this.resizeHandler);

    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
    }

    if (this.resizeTimer) {
      window.clearTimeout(this.resizeTimer);
    }

    this.layer?.remove();
    this.canvas?.remove();
    this.cells.length = 0;
  }

  private scheduleBuild() {
    if (this.resizeTimer) {
      window.clearTimeout(this.resizeTimer);
    }

    this.resizeTimer = window.setTimeout(() => this.buildGrid(), 160);
  }

  private getAccentRgb(element: HTMLElement): { r: number; g: number; b: number } {
    const temp = document.createElement('div');
    temp.style.color = 'var(--gravity-accent, #00e5ff)';
    element.appendChild(temp);
    const color = getComputedStyle(temp).color;
    element.removeChild(temp);
    const match = color.match(/\d+/g);
    if (match && match.length >= 3) {
      return { r: parseInt(match[0]), g: parseInt(match[1]), b: parseInt(match[2]) };
    }
    return { r: 0, g: 229, b: 255 };
  }

  private preRenderCell(rgb: { r: number; g: number; b: number }) {
    this.cellCanvas = document.createElement('canvas');
    this.cellCanvas.width = this.cellSize;
    this.cellCanvas.height = this.cellSize;
    const ctx = this.cellCanvas.getContext('2d');
    if (!ctx) return;

    const rgbStr = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

    // border-right: 18% opacity
    ctx.strokeStyle = `rgba(${rgbStr}, 0.18)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(this.cellSize - 1, 0);
    ctx.lineTo(this.cellSize - 1, this.cellSize);
    ctx.stroke();

    // border-bottom: 14% opacity
    ctx.strokeStyle = `rgba(${rgbStr}, 0.14)`;
    ctx.beginPath();
    ctx.moveTo(0, this.cellSize - 1);
    ctx.lineTo(this.cellSize, this.cellSize - 1);
    ctx.stroke();

    // linear-gradient 135deg 6% to transparent 56%
    const grad1 = ctx.createLinearGradient(0, 0, this.cellSize, this.cellSize);
    grad1.addColorStop(0, `rgba(${rgbStr}, 0.06)`);
    grad1.addColorStop(0.56, `rgba(${rgbStr}, 0)`);
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, this.cellSize, this.cellSize);

    // linear-gradient 315deg rgba(255,255,255,0.02) to transparent 48%
    const grad2 = ctx.createLinearGradient(this.cellSize, this.cellSize, 0, 0);
    grad2.addColorStop(0, `rgba(255, 255, 255, 0.02)`);
    grad2.addColorStop(0.48, `rgba(255, 255, 255, 0)`);
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, this.cellSize, this.cellSize);

    // inset shadow equivalent
    ctx.strokeStyle = `rgba(255, 255, 255, 0.006)`;
    ctx.strokeRect(0, 0, this.cellSize, this.cellSize);
  }

  private buildGrid() {
    if (!this.layer || !this.canvas || !this.ctx) return;

    const host = this.elementRef.nativeElement;
    const rect = host.getBoundingClientRect();

    // Ensure canvas dimensions match actual size for crisp rendering
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;

    const rgb = this.getAccentRgb(host);
    this.preRenderCell(rgb);

    const columns = Math.ceil(rect.width / this.cellSize) + 1;
    const rows = Math.ceil(rect.height / this.cellSize) + 1;

    this.cells.length = 0;

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const x = column * this.cellSize;
        const y = row * this.cellSize;

        this.cells.push({
          x: x,
          y: y,
          centerX: x + this.cellSize / 2,
          centerY: y + this.cellSize / 2,
          currentDepth: 0,
          currentScale: 1,
          currentOpacity: 0.2,
        });
      }
    }

    this.updateCells();
  }

  private onPointerMove(event: PointerEvent) {
    const host = this.elementRef.nativeElement;
    const rect = host.getBoundingClientRect();

    this.targetPointerX = event.clientX - rect.left;
    this.targetPointerY = event.clientY - rect.top;

    if (!this.isPointerActive && !this.isSettling) {
      this.currentPointerX = this.targetPointerX;
      this.currentPointerY = this.targetPointerY;
    }

    this.isPointerActive = true;
    this.isSettling = true;
    host.classList.add('gravity-active');

    this.scheduleGravityFrame();
  }

  private onPointerLeave() {
    this.isPointerActive = false;
    this.elementRef.nativeElement.classList.remove('gravity-active');
    this.scheduleGravityFrame();
  }

  private scheduleGravityFrame() {
    if (this.animationFrame) return;

    this.animationFrame = window.requestAnimationFrame(() => {
      this.animationFrame = undefined;
      this.tickPointer();
      this.updateCells();
    });
  }

  private tickPointer() {
    this.currentPointerX += (this.targetPointerX - this.currentPointerX) * 0.22;
    this.currentPointerY += (this.targetPointerY - this.currentPointerY) * 0.22;

    const host = this.elementRef.nativeElement;
    host.style.setProperty('--gravity-x', `${this.currentPointerX}px`);
    host.style.setProperty('--gravity-y', `${this.currentPointerY}px`);
  }

  private updateCells() {
    if (!this.ctx || !this.canvas || !this.cellCanvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let stillSettling = false;

    for (const cell of this.cells) {
      let targetDepth = 0;
      let targetScale = 1;
      let targetOpacity = 0.2;

      if (this.isPointerActive) {
        const dx = cell.centerX - this.currentPointerX;
        const dy = cell.centerY - this.currentPointerY;
        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared <= this.radiusSquared) {
          const distance = Math.sqrt(distanceSquared);
          const influence = Math.max(0, 1 - distance / this.influenceRadius);
          const pull = influence * influence;
          targetDepth = pull * this.maxDepth;
          targetScale = 1 - pull * 0.025;
          targetOpacity = 0.2 + pull * 0.22;
        }
      }

      cell.currentDepth += (targetDepth - cell.currentDepth) * 0.22;
      cell.currentScale += (targetScale - cell.currentScale) * 0.22;
      cell.currentOpacity += (targetOpacity - cell.currentOpacity) * 0.16;

      if (
        Math.abs(cell.currentDepth - targetDepth) > 0.01 ||
        Math.abs(cell.currentScale - targetScale) > 0.001 ||
        Math.abs(cell.currentOpacity - targetOpacity) > 0.005
      ) {
        stillSettling = true;
      }

      this.ctx.save();
      this.ctx.translate(cell.centerX, cell.centerY + cell.currentDepth);
      this.ctx.scale(cell.currentScale, cell.currentScale);
      this.ctx.globalAlpha = cell.currentOpacity;
      this.ctx.drawImage(this.cellCanvas, -this.cellSize / 2, -this.cellSize / 2);
      this.ctx.restore();
    }

    if (this.isPointerActive || stillSettling) {
      this.scheduleGravityFrame();
    } else {
      this.isSettling = false;
    }
  }
}
