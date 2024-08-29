import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassesComponent } from './my-classes.component';

describe('MyClassesComponent', () => {
  let component: MyClassesComponent;
  let fixture: ComponentFixture<MyClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
