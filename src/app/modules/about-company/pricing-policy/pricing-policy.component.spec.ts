import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPolicyComponent } from './pricing-policy.component';

describe('PricingPolicyComponent', () => {
  let component: PricingPolicyComponent;
  let fixture: ComponentFixture<PricingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
