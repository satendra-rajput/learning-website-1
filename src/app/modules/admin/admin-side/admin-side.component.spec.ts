import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideComponent } from './admin-side.component';

describe('AdminSideComponent', () => {
  let component: AdminSideComponent;
  let fixture: ComponentFixture<AdminSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
