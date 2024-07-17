import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedAstrologersComponent } from './top-rated-astrologers.component';

describe('TopRatedAstrologersComponent', () => {
  let component: TopRatedAstrologersComponent;
  let fixture: ComponentFixture<TopRatedAstrologersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopRatedAstrologersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedAstrologersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
