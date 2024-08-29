import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuizComponent } from './my-quiz.component';

describe('MyQuizComponent', () => {
  let component: MyQuizComponent;
  let fixture: ComponentFixture<MyQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
