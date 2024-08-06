import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAstrologerComponent } from './admin-astrologer.component';

describe('AdminAstrologerComponent', () => {
  let component: AdminAstrologerComponent;
  let fixture: ComponentFixture<AdminAstrologerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAstrologerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAstrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
