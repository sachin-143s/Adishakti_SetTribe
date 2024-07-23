import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyadiComponent } from './whyadi.component';

describe('WhyadiComponent', () => {
  let component: WhyadiComponent;
  let fixture: ComponentFixture<WhyadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyadiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
