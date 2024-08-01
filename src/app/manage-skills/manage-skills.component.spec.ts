import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSkillsComponent } from './manage-skills.component';

describe('ManageSkillsComponent', () => {
  let component: ManageSkillsComponent;
  let fixture: ComponentFixture<ManageSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
