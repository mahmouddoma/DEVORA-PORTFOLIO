import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '../../core/services/gsap.service';
import { NavbarComponent } from './navbar.component';

class GsapServiceMock {
  isBrowser = false;
  gsap = {
    utils: {
      selector: () => () => [],
    },
    from: () => undefined,
  };
  context() {
    return { revert: () => undefined };
  }
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [{ provide: GsapService, useClass: GsapServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the mobile menu', () => {
    component.toggleMenu();
    expect(component.isMenuOpen).toBe(true);
  });

  it('should compact the header after scrolling 70vh', () => {
    component.updateHeaderState(699, 1000);
    expect(component.isHeaderCompact).toBe(false);

    component.updateHeaderState(700, 1000);
    expect(component.isHeaderCompact).toBe(true);
  });

  it('should mark nav links active by href', () => {
    component.activeSection = 'services';

    expect(component.isActive('#services')).toBe(true);
    expect(component.isActive('#work')).toBe(false);
  });
});
