import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminastrologerComponent } from './adminastrologer.component';

describe('AdminastrologerComponent', () => {
  let component: AdminastrologerComponent;
  let fixture: ComponentFixture<AdminastrologerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminastrologerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminastrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
