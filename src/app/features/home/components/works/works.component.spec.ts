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

  it('should filter projects by sector', () => {
    component.setFilter('education');
    expect(component.filteredProjects.map((project) => project.id)).toEqual([102]);
  });

  it('should contain the provided live sector projects', () => {
    expect(component.projects.map((project) => project.id)).toEqual([101, 102, 103]);
    expect(component.projects.map((project) => project.filter)).toEqual([
      'realEstate',
      'education',
      'agriculture',
    ]);
  });
});
