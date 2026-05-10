import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  NgZone,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  templateUrl: './three-scene.component.html',
  styleUrl: './three-scene.component.css',
})
export class ThreeSceneComponent implements OnInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef<HTMLElement>;
  @ViewChild('cursorMarker', { static: true }) cursorMarker!: ElementRef<HTMLElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private logoGroup = new THREE.Group();
  private logoParticles!: THREE.Points;
  private auraParticles!: THREE.Points;
  private cursorOrb!: THREE.Mesh;
  private cursorGlow!: THREE.Mesh;
  private basePositions!: Float32Array;
  private animationId = 0;
  private hasPointer = false;
  private readonly cursorPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.28);
  private readonly raycaster = new THREE.Raycaster();
  private readonly cursorTarget = new THREE.Vector3();
  private readonly cursorLocal = new THREE.Vector3();
  private readonly pointer = new THREE.Vector2();
  private readonly targetPointer = new THREE.Vector2();
  private resizeObserver?: ResizeObserver;
  private lastPointerClientX = 0;
  private lastPointerClientY = 0;
  private readonly resizeHandler = () => this.onWindowResize();
  private readonly pointerHandler = (event: PointerEvent) => this.onPointerMove(event);

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.initThree();
    this.createDevoraLogo();
    this.createCursorOrb();
    this.positionLogo();
    this.animate();
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('pointermove', this.pointerHandler, { passive: true });
    this.resizeObserver = new ResizeObserver(this.resizeHandler);
    this.resizeObserver.observe(this.rendererContainer.nativeElement);
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('pointermove', this.pointerHandler);
    this.resizeObserver?.disconnect();
    this.disposeObject(this.logoParticles);
    this.disposeObject(this.auraParticles);
    this.disposeObject(this.cursorOrb);
    this.disposeObject(this.cursorGlow);
    this.renderer?.dispose();
  }

  private initThree() {
    const { width, height } = this.getCanvasSize();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    this.camera.position.z = 6.2;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.scene.add(this.logoGroup);
  }

  private createDevoraLogo() {
    const logoPoints = this.generateLogoPoints();
    const positions = new Float32Array(logoPoints.length * 3);
    const colors = new Float32Array(logoPoints.length * 3);
    const cyan = new THREE.Color('#00e5ff');
    const blue = new THREE.Color('#4c8dff');
    const rose = new THREE.Color('#ff5f8f');

    logoPoints.forEach((point, index) => {
      const offset = index * 3;
      positions[offset] = point.x;
      positions[offset + 1] = point.y;
      positions[offset + 2] = point.z;

      const color = cyan.clone().lerp(point.hot ? rose : blue, point.mix);
      colors[offset] = color.r;
      colors[offset + 1] = color.g;
      colors[offset + 2] = color.b;
    });

    this.basePositions = positions.slice();

    const logoGeometry = new THREE.BufferGeometry();
    logoGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    logoGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    this.logoParticles = new THREE.Points(
      logoGeometry,
      new THREE.PointsMaterial({
        size: 0.042,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    const auraCount = 1400;
    const auraPositions = new Float32Array(auraCount * 3);
    const auraColors = new Float32Array(auraCount * 3);

    for (let i = 0; i < auraCount; i++) {
      const offset = i * 3;
      const radius = 1.2 + Math.random() * 2.5;
      const angle = Math.random() * Math.PI * 2;
      auraPositions[offset] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.5;
      auraPositions[offset + 1] = Math.sin(angle) * radius * 0.6 + (Math.random() - 0.5) * 0.5;
      auraPositions[offset + 2] = (Math.random() - 0.5) * 2.0;

      const color = cyan.clone().lerp(Math.random() > 0.6 ? rose : blue, Math.random());
      auraColors[offset] = color.r;
      auraColors[offset + 1] = color.g;
      auraColors[offset + 2] = color.b;
    }

    this.basePositions = positions.slice();
    this.auraBasePositions = auraPositions.slice();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    this.logoParticles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.042,
        vertexColors: true,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    const auraGeometry = new THREE.BufferGeometry();
    auraGeometry.setAttribute('position', new THREE.BufferAttribute(auraPositions, 3));
    auraGeometry.setAttribute('color', new THREE.BufferAttribute(auraColors, 3));
    this.auraParticles = new THREE.Points(
      auraGeometry,
      new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.38,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    this.logoGroup.add(this.auraParticles, this.logoParticles);
  }

  private auraBasePositions!: Float32Array;

  private createCursorOrb() {
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: '#8b5cf6',
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: '#00e5ff',
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.cursorOrb = new THREE.Mesh(new THREE.RingGeometry(0.062, 0.078, 48), orbMaterial);
    this.cursorGlow = new THREE.Mesh(new THREE.CircleGeometry(0.22, 48), glowMaterial);
    this.cursorOrb.position.set(0, 0, 0.28);
    this.cursorGlow.position.copy(this.cursorOrb.position);
    this.cursorOrb.visible = false;
    this.cursorGlow.visible = false;
    this.scene.add(this.cursorGlow, this.cursorOrb);
  }

  private generateLogoPoints() {
    const points: { x: number; y: number; z: number; mix: number; hot?: boolean }[] = [];
    const addPoint = (x: number, y: number, hot = false) => {
      points.push({
        x: x + (Math.random() - 0.5) * 0.028,
        y: y + (Math.random() - 0.5) * 0.028,
        z: (Math.random() - 0.5) * 0.28,
        mix: Math.random(),
        hot,
      });
    };

    const addSvgPoint = (x: number, y: number, hot = false) => {
      const scale = 72;
      addPoint((x - 145) / scale, (50 - y) / scale, hot);
    };

    // Prompt arrow (>)
    this.sampleSvgLine(15, 35, 30, 50, 60, addSvgPoint, true);
    this.sampleSvgLine(30, 50, 15, 65, 60, addSvgPoint, true);

    // Underscore (_)
    this.sampleSvgLine(40, 75, 60, 75, 45, addSvgPoint);

    // DEVORA letters using dot matrix for better density
    this.addDotMatrixText('DEVORA', 75, 31, addSvgPoint);

    return points;
  }

  private sampleSvgLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    count: number,
    addPoint: (x: number, y: number, hot?: boolean) => void,
    hot = false,
  ) {
    const length = Math.hypot(x2 - x1, y2 - y1);
    const normalX = length ? -(y2 - y1) / length : 0;
    const normalY = length ? (x2 - x1) / length : 0;
    const offsets = [-2.2, 0, 2.2];

    offsets.forEach((offset) => {
      for (let i = 0; i < count; i++) {
        const progress = count === 1 ? 0 : i / (count - 1);
        const x = THREE.MathUtils.lerp(x1, x2, progress) + normalX * offset;
        const y = THREE.MathUtils.lerp(y1, y2, progress) + normalY * offset;
        addPoint(x, y, hot);
      }
    });
  }

  private addDotMatrixText(
    text: string,
    startX: number,
    startY: number,
    addPoint: (x: number, y: number, hot?: boolean) => void,
  ) {
    const glyphs: Record<string, string[]> = {
      D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
      E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
      V: ['10001', '10001', '10001', '10001', '01010', '01010', '00100'],
      O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
      R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
      A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
    };
    const cell = 5;
    const gap = 5;
    let cursorX = startX;

    text.split('').forEach((letter) => {
      const glyph = glyphs[letter];
      if (!glyph) {
        cursorX += cell * 3;
        return;
      }

      glyph.forEach((row, rowIndex) => {
        row.split('').forEach((pixel, columnIndex) => {
          if (pixel !== '1') return;

          const x = cursorX + columnIndex * cell + cell / 2;
          const y = startY + rowIndex * cell + cell / 2;
          this.sampleSvgDot(x, y, cell * 0.34, addPoint);
        });
      });

      cursorX += cell * 5 + gap;
    });
  }

  private sampleSvgDot(
    cx: number,
    cy: number,
    radius: number,
    addPoint: (x: number, y: number, hot?: boolean) => void,
  ) {
    addPoint(cx, cy);

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      addPoint(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    }
  }

  private sampleLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    count: number,
    addPoint: (x: number, y: number, hot?: boolean) => void,
  ) {
    for (let i = 0; i < count; i++) {
      const progress = count === 1 ? 0 : i / (count - 1);
      addPoint(THREE.MathUtils.lerp(x1, x2, progress), THREE.MathUtils.lerp(y1, y2, progress));
    }
  }

  private sampleArc(
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    start: number,
    end: number,
    count: number,
    addPoint: (x: number, y: number, hot?: boolean) => void,
  ) {
    for (let i = 0; i < count; i++) {
      const progress = count === 1 ? 0 : i / (count - 1);
      const angle = THREE.MathUtils.lerp(start, end, progress);
      addPoint(cx + Math.cos(angle) * rx, cy + Math.sin(angle) * ry);
    }
  }

  private sampleCircle(
    cx: number,
    cy: number,
    radius: number,
    count: number,
    addPoint: (x: number, y: number, hot?: boolean) => void,
    hot = false,
  ) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      addPoint(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, hot);
    }
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const start = performance.now();
      const loop = () => {
        this.animationId = requestAnimationFrame(loop);
        const elapsed = (performance.now() - start) * 0.001;

        this.pointer.lerp(this.targetPointer, 0.06);
        this.logoGroup.rotation.y = this.pointer.x * 0.11 + Math.sin(elapsed * 0.42) * 0.035;
        this.logoGroup.rotation.x = -this.pointer.y * 0.07 + Math.cos(elapsed * 0.35) * 0.02;
        this.logoGroup.position.x +=
          (this.getLogoX() + this.pointer.x * 0.1 - this.logoGroup.position.x) * 0.05;
        this.logoGroup.position.y +=
          (this.getLogoY() + this.pointer.y * 0.06 - this.logoGroup.position.y) * 0.05;

        this.cursorOrb.position.copy(this.cursorTarget);
        this.cursorGlow.position.copy(this.cursorOrb.position);
        this.logoGroup.updateMatrixWorld();
        this.cursorLocal.copy(this.cursorOrb.position);
        this.logoGroup.worldToLocal(this.cursorLocal);

        this.animateLogoParticles(elapsed);
        this.auraParticles.rotation.z += 0.0009;
        this.auraParticles.rotation.y = this.pointer.x * 0.08;
        this.cursorOrb.scale.setScalar(1 + Math.sin(elapsed * 3.8) * 0.08);
        this.cursorGlow.scale.setScalar(1 + Math.sin(elapsed * 2.4) * 0.12);

        this.renderer.render(this.scene, this.camera);
      };
      loop();
    });
  }

  private animateLogoParticles(elapsed: number) {
    const hasCursor = this.hasPointer;
    const cursorRadius = window.innerWidth < 992 ? 1.05 : 0.74;

    // Animate Logo Particles
    const logoPosAttr = this.logoParticles.geometry.getAttribute(
      'position',
    ) as THREE.BufferAttribute;
    const logoPositions = logoPosAttr.array as Float32Array;
    for (let i = 0; i < logoPositions.length; i += 3) {
      const seed = i * 0.013;
      const baseX = this.basePositions[i];
      const baseY = this.basePositions[i + 1];
      const baseZ = this.basePositions[i + 2];
      let pushX = 0,
        pushY = 0,
        pushZ = 0;

      if (hasCursor) {
        const dx = baseX - this.cursorLocal.x;
        const dy = baseY - this.cursorLocal.y;
        const distance = Math.hypot(dx, dy);

        if (distance < cursorRadius) {
          const force = (1 - distance / cursorRadius) ** 2.1;
          const angle = Math.atan2(dy, dx);
          pushX = Math.cos(angle) * force * 0.18;
          pushY = Math.sin(angle) * force * 0.18;
          pushZ = force * 0.08;
        }
      }

      logoPositions[i] = baseX + pushX + Math.sin(elapsed * 1.6 + seed) * 0.015;
      logoPositions[i + 1] = baseY + pushY + Math.cos(elapsed * 1.35 + seed) * 0.015;
      logoPositions[i + 2] = baseZ + pushZ + Math.sin(elapsed * 1.1 + seed) * 0.045;
    }
    logoPosAttr.needsUpdate = true;

    // Animate Aura Particles (Background Dots)
    const auraPosAttr = this.auraParticles.geometry.getAttribute(
      'position',
    ) as THREE.BufferAttribute;
    const auraPositions = auraPosAttr.array as Float32Array;
    for (let i = 0; i < auraPositions.length; i += 3) {
      const seed = i * 0.007;
      const baseX = this.auraBasePositions[i];
      const baseY = this.auraBasePositions[i + 1];
      const baseZ = this.auraBasePositions[i + 2];
      let pushX = 0,
        pushY = 0,
        pushZ = 0;

      if (hasCursor) {
        const dx = baseX + this.logoGroup.position.x - this.cursorTarget.x;
        const dy = baseY + this.logoGroup.position.y - this.cursorTarget.y;
        const distance = Math.hypot(dx, dy);

        if (distance < cursorRadius * 1.55) {
          const force = (1 - distance / (cursorRadius * 1.55)) ** 2.35;
          const angle = Math.atan2(dy, dx);
          const swirl = force * 0.08;
          const pull = force * 0.05;
          pushX = -Math.cos(angle) * pull + -Math.sin(angle) * swirl;
          pushY = -Math.sin(angle) * pull + Math.cos(angle) * swirl;
          pushZ = force * 0.1;
        }
      }

      auraPositions[i] = baseX + pushX + Math.sin(elapsed * 0.64 + seed) * 0.018;
      auraPositions[i + 1] = baseY + pushY + Math.cos(elapsed * 0.52 + seed) * 0.018;
      auraPositions[i + 2] = baseZ + pushZ;
    }
    auraPosAttr.needsUpdate = true;
  }

  private onPointerMove(event: PointerEvent) {
    this.lastPointerClientX = event.clientX;
    this.lastPointerClientY = event.clientY;
    const pointer = this.updateCursorFromClientPosition(event.clientX, event.clientY);
    this.targetPointer.copy(pointer);
    this.raycaster.setFromCamera(pointer, this.camera);
    this.raycaster.ray.intersectPlane(this.cursorPlane, this.cursorTarget);

    if (!this.cursorOrb.visible) {
      this.cursorOrb.position.copy(this.cursorTarget);
      this.cursorGlow.position.copy(this.cursorTarget);
    }
  }

  private onWindowResize() {
    const { width, height } = this.getCanvasSize();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.positionLogo();

    if (this.hasPointer) {
      const pointer = this.updateCursorFromClientPosition(this.lastPointerClientX, this.lastPointerClientY);
      this.targetPointer.copy(pointer);
      this.raycaster.setFromCamera(pointer, this.camera);
      this.raycaster.ray.intersectPlane(this.cursorPlane, this.cursorTarget);
    }
  }

  private positionLogo() {
    this.logoGroup.position.set(this.getLogoX(), this.getLogoY(), 0);
    this.logoGroup.scale.setScalar(window.innerWidth < 992 ? 0.72 : 1.08);
  }

  private getLogoX() {
    if (window.innerWidth < 992) return 0.2;
    return 2.2;
  }

  private getLogoY() {
    if (window.innerWidth < 992) return -1.05;
    return 0;
  }

  private getCanvasSize() {
    const element = this.rendererContainer.nativeElement;
    return {
      width: Math.max(element.clientWidth || window.innerWidth, 1),
      height: Math.max(element.clientHeight || window.innerHeight, 1),
    };
  }

  private updateCursorFromClientPosition(clientX: number, clientY: number) {
    const rect = this.rendererContainer.nativeElement.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || window.innerHeight;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    this.cursorMarker.nativeElement.style.setProperty('--cursor-x', `${x}px`);
    this.cursorMarker.nativeElement.style.setProperty('--cursor-y', `${y}px`);
    this.hasPointer = x >= 0 && x <= width && y >= 0 && y <= height;
    this.cursorMarker.nativeElement.classList.toggle('visible', this.hasPointer);

    return new THREE.Vector2((x / width) * 2 - 1, -(y / height) * 2 + 1);
  }

  private disposeObject(object?: THREE.Object3D) {
    const disposable = object as THREE.Object3D & {
      geometry?: THREE.BufferGeometry;
      material?: THREE.Material | THREE.Material[];
    };

    disposable?.geometry?.dispose();
    const material = disposable?.material;
    if (Array.isArray(material)) {
      material.forEach((item) => item.dispose());
    } else {
      material?.dispose();
    }
  }
}
