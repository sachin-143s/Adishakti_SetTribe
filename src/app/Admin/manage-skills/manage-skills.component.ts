import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrl: './manage-skills.component.css'
})
export class ManageSkillsComponent {
  skills = [
    { name: 'JavaScript', editing: false },
    { name: 'Angular', editing: false },
    { name: 'CSS', editing: false }
  ];

  newSkill = '';

  editSkill(index: number) {
    this.skills[index].editing = true;
  }

  saveSkill(index: number) {
    this.skills[index].editing = false;
  }

  deleteSkill(index: number) {
    this.skills.splice(index, 1);
  }

  addSkill() {
    if (this.newSkill.trim()) {
      this.skills.push({ name: this.newSkill, editing: false });
      this.newSkill = '';
    }
  }
}