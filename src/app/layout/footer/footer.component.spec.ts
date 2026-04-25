import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '../../core/services/gsap.service';
import { FooterComponent } from './footer.component';

class GsapServiceMock {
  context() {
    return { revert: () => undefined };
  }
  sectionReveal() {
    return undefined;
  }
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [{ provide: GsapService, useClass: GsapServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
