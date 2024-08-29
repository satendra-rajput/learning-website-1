import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsServicesComponent } from './terms-services.component';

describe('TermsServicesComponent', () => {
  let component: TermsServicesComponent;
  let fixture: ComponentFixture<TermsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
