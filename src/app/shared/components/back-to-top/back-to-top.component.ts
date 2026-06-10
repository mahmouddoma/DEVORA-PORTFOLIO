import { Component } from '@angular/core';

import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css',
})
export class BackToTopComponent {
  constructor(readonly scrollService: ScrollService) {}

  scrollToTop() {
    this.scrollService.scrollToTop();
  }
}
