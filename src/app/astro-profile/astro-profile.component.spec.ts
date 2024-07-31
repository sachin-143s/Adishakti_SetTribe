import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroProfileComponent } from './astro-profile.component';

describe('AstroProfileComponent', () => {
  let component: AstroProfileComponent;
  let fixture: ComponentFixture<AstroProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstroProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
