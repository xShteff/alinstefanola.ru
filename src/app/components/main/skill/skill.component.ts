import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'aso-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent {
  @Input() public skill: Skill;

  public format(rating) {
    return `${rating / 10}/10`;
  }
}
