import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aso-skill-levels',
  templateUrl: './skill-levels.component.html',
  styleUrls: ['./skill-levels.component.less']
})
export class SkillLevelsComponent {
  skills = {
    beginner: ['Relational Databases', 'React', 'C', 'C++', 'F#'].sort(),
    intermediate: [
      'Python',
      'Java',
      'Angular',
      'Angular.JS',
      'C#',
      'Unity3D',
      '.NET Core',
      'AWS - Serverless',
      'AWS - ECS/Fargate',
      'AWS - DynamoDB (NoSQL)',
      'Docker',
      'Node',
      'NoSQL',
      'VR Application Development',
      'AR Application Development',
      'UX Design',
      'WebSockets',
      'Vuforia',
      'Node.JS'
    ].sort(),
    expert: [
      'JavaScript',
      'GitHub Actions',
      'Git',
      'Angular',
      'TypeScript',
      'NPM',
      'Adobe Photoshop'
    ].sort()
  };
}
