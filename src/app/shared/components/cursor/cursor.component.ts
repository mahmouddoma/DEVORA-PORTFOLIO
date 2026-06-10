import { Component, OnDestroy, OnInit, computed } from '@angular/core';

import { CursorService } from '../../../core/services/cursor.service';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css',
})
export class CursorComponent implements OnInit, OnDestroy {
  readonly transform = computed(
    () => `translate3d(${this.cursor.x()}px, ${this.cursor.y()}px, 0) translate(-50%, -50%)`,
  );

  constructor(readonly cursor: CursorService) {}

  ngOnInit() {
    this.cursor.startTracking();
  }

  ngOnDestroy() {
    this.cursor.stopTracking();
  }
}
