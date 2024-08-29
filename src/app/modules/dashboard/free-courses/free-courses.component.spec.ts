import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCoursesComponent } from './free-courses.component';

describe('FreeCoursesComponent', () => {
  let component: FreeCoursesComponent;
  let fixture: ComponentFixture<FreeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
