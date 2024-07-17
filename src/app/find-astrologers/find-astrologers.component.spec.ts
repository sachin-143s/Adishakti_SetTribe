import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAstrologersComponent } from './find-astrologers.component';

describe('FindAstrologersComponent', () => {
  let component: FindAstrologersComponent;
  let fixture: ComponentFixture<FindAstrologersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindAstrologersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAstrologersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
