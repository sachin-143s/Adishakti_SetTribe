import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrl: './manage-skills.component.css'
})
export class ManageSkillsComponent implements OnInit {
  skillscntain: string[] = []; // Array to hold skill items

  constructor() {}

  ngOnInit(): void {
    this.loadSkills();
  }

  addSkills(): void {
    const newSkill = prompt('Enter new skill:');
    if (newSkill) {
      this.skillscntain.push(newSkill);
    }
  }

  editSkill(index: number): void {
    const newSkill = prompt('Enter new skill:', this.skillscntain[index]);
    if (newSkill) {
      this.skillscntain[index] = newSkill;
    }
  }

  deleteSkill(index: number): void {
    if (confirm('Are you sure you want to delete this skill?')) {
      this.skillscntain.splice(index, 1);
    }
  }

  private loadSkills(): void {
    // Simulate loading initial skill items
    this.skillscntain = ['Example Skill 1', 'Example Skill 2', 'Example Skill 3'];
  }
}