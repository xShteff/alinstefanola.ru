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
      { name: 'C#', rating: 7 },
      { name: 'Java', rating: 8 },
      { name: 'JavaScript', rating: 10 },
      { name: 'TypeScript', rating: 8 },
      { name: 'Angular', rating: 8 },
      { name: 'React', rating: 5 },
      { name: 'Unity3D', rating: 7 },
      { name: '.NET Core', rating: 7 },
      { name: 'NoSQL', rating: 7 },
      { name: 'RDB', rating: 6 },
      { name: 'AWS Lambda', rating: 7 },
      { name: 'AWS ECS', rating: 8 },
      { name: 'Docker', rating: 7 },
      { name: 'Git', rating: 9 },
      { name: 'GH Actions', rating: 10 },
      { name: 'Python', rating: 5 },
      { name: 'VR Apps', rating: 6 },
      { name: 'Web Development', rating: 8},
      { name: 'Node', rating: 7 },
      { name: 'Databases', rating: 7 },
    ].sort((a, b) => {
      // Highest to lowest.
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
  }

  ngOnInit() {}
}
