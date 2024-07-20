import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerSignupComponent } from './astrologer-signup.component';

describe('AstrologerSignupComponent', () => {
  let component: AstrologerSignupComponent;
  let fixture: ComponentFixture<AstrologerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologerSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
