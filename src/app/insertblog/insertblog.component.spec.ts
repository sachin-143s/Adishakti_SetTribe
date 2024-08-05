import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertblogComponent } from './insertblog.component';

describe('InsertblogComponent', () => {
  let component: InsertblogComponent;
  let fixture: ComponentFixture<InsertblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
