import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerRequestComponent } from './astrologer-request.component';

describe('AstrologerRequestComponent', () => {
  let component: AstrologerRequestComponent;
  let fixture: ComponentFixture<AstrologerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologerRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
