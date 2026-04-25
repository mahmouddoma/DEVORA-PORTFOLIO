import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '../../../../core/services/gsap.service';
import { WorksComponent } from './works.component';

class GsapServiceMock {
  isBrowser = false;
  context() {
    return { revert: () => undefined };
  }
  sectionReveal() {
    return undefined;
  }
  gsap = {
    from: () => undefined,
  };
}

describe('WorksComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksComponent],
      providers: [{ provide: GsapService, useClass: GsapServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter projects by type', () => {
    component.setFilter('angular');
    expect(component.filteredProjects.length).toBe(3);
  });

  it('should contain the provided live Angular projects', () => {
    expect(component.projects.map((project) => project.id)).toEqual([101, 102, 103]);
    expect(component.projects.every((project) => project.categoryKey === 'work.category.angular')).toBe(true);
  });
});
