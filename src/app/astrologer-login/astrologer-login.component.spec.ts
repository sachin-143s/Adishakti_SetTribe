import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerLoginComponent } from './astrologer-login.component';

describe('AstrologerLoginComponent', () => {
  let component: AstrologerLoginComponent;
  let fixture: ComponentFixture<AstrologerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologerLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
