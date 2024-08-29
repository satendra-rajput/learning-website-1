import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCourseCardComponent } from './free-course-card.component';

describe('FreeCourseCardComponent', () => {
  let component: FreeCourseCardComponent;
  let fixture: ComponentFixture<FreeCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
