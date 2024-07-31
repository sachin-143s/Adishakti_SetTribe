import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerDashboardComponent } from './astrologer-dashboard.component';

describe('AstrologerDashboardComponent', () => {
  let component: AstrologerDashboardComponent;
  let fixture: ComponentFixture<AstrologerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
