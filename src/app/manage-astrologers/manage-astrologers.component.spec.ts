import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAstrologersComponent } from './manage-astrologers.component';

describe('ManageAstrologersComponent', () => {
  let component: ManageAstrologersComponent;
  let fixture: ComponentFixture<ManageAstrologersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageAstrologersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAstrologersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
