import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardComponent } from './menu-card.component';

describe('MenuCardComponent', () => {
  let component: MenuCardComponent;
  let fixture: ComponentFixture<MenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
