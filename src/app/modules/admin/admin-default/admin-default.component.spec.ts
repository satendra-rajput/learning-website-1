import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDefaultComponent } from './admin-default.component';

describe('AdminDefaultComponent', () => {
  let component: AdminDefaultComponent;
  let fixture: ComponentFixture<AdminDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
