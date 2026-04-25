import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '../../../../core/services/gsap.service';
import { ContactComponent } from './contact.component';

class GsapServiceMock {
  context() {
    return { revert: () => undefined };
  }
  sectionReveal() {
    return undefined;
  }
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [{ provide: GsapService, useClass: GsapServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show success state after submit', () => {
    component.onSubmit();
    expect(component.submitted).toBe(true);
  });
});
