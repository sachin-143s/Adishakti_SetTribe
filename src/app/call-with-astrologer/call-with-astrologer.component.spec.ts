import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWithAstrologerComponent } from './call-with-astrologer.component';

describe('CallWithAstrologerComponent', () => {
  let component: CallWithAstrologerComponent;
  let fixture: ComponentFixture<CallWithAstrologerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallWithAstrologerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallWithAstrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
