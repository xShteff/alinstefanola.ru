import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'aso-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.less']
})
export class SkillListComponent implements OnInit {
  public skills?: Skill[];
  constructor() {
    this.skills = [
      { name: 'C#', rating: 9 },
      { name: 'C#', rating: 9 },
      { name: 'C#', rating: 9 },
      { name: 'C#', rating: 9 },
      { name: 'C#', rating: 9 }
    ];
  }

  ngOnInit() {}
}
