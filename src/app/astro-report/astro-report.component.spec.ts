import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroReportComponent } from './astro-report.component';

describe('AstroReportComponent', () => {
  let component: AstroReportComponent;
  let fixture: ComponentFixture<AstroReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstroReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
