import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '../../../../core/services/gsap.service';
import { TechStackComponent } from './tech-stack.component';

class GsapServiceMock {
  context() {
    return { revert: () => undefined };
  }
  sectionReveal() {
    return undefined;
  }
}

describe('TechStackComponent', () => {
  let component: TechStackComponent;
  let fixture: ComponentFixture<TechStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackComponent],
      providers: [{ provide: GsapService, useClass: GsapServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
