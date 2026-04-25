import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '../../../../core/services/gsap.service';
import { ThreeSceneComponent } from '../../../../shared/components/three-scene/three-scene.component';
import { HeroComponent } from './hero.component';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  template: '',
})
class ThreeSceneStubComponent {}

class GsapServiceMock {
  context() {
    return { revert: () => undefined };
  }
}

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [{ provide: GsapService, useClass: GsapServiceMock }],
    })
      .overrideComponent(HeroComponent, {
        remove: { imports: [ThreeSceneComponent] },
        add: { imports: [ThreeSceneStubComponent] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
