import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '../../../../core/services/gsap.service';
import { TestimonialsComponent } from './testimonials.component';

class GsapServiceMock {
  isBrowser = false;
  context() {
    return { revert: () => undefined };
  }
  sectionReveal() {
    return undefined;
  }
}

describe('TestimonialsComponent', () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsComponent],
      providers: [{ provide: GsapService, useClass: GsapServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should advance testimonials', () => {
    component.next();
    expect(component.activeIndex).toBe(1);
  });
});
