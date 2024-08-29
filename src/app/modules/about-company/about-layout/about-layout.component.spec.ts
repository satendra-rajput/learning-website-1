import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLayoutComponent } from './about-layout.component';

describe('AboutLayoutComponent', () => {
  let component: AboutLayoutComponent;
  let fixture: ComponentFixture<AboutLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
