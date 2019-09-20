import { Component, OnInit } from '@angular/core';
import { JobEvent } from 'src/app/models/job-event';

@Component({
  selector: 'aso-experience-timeline',
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.less']
})
export class ExperienceTimelineComponent implements OnInit {
  public jobs: JobEvent[];
  constructor() {
    this.jobs = [
      {
        icon: '🏢',
        company: 'LEGO Group',
        dateEnd: 'Current',
        dateStart: 'September 2018',
        jobTitle: 'Junior IT Engineer',
        keywords: [
          'Java',
          'Gradle',
          'Maven',
          'C#',
          'Angular',
          'CI/CD',
          'AWS',
          'Serveless',
          'REST APIs',
          'NoSQL',
          'MySQL'
        ]
      },
      {
        icon: '🌟',
        dateStart: 'February 2018',
        description: 'Graduated BSc of Software Engineering'
      },
      {
        icon: '🏢',
        company: 'EConGrid',
        dateEnd: 'February 2018',
        dateStart: 'February 2017',
        jobTitle: 'Student Software Engineer',
        keywords: ['ASP.NET Core', 'Angular.JS', 'Websockets']
      },
      {
        icon: '🏢',
        company: 'EConGrid',
        jobTitle: 'Software Engineer Intern',
        dateStart: 'August 2016',
        dateEnd: 'January 2017',
        keywords: ['ASP.NET', 'REST APIs']
      },
      {
        icon: '🏢',
        company: 'InnoGames GmbH',
        dateEnd: 'August 2017',
        dateStart: 'July 2016',
        jobTitle: 'Community Manager'
      },
      {
        icon: '🏢',
        company: 'VIA University College',
        dateEnd: 'January 2016',
        dateStart: 'August 2015',
        jobTitle: 'Student Lecturer'
      },
      {
        icon: '👨‍🎓',
        company: 'VIA University College',
        dateStart: 'August 2014',
        description:
          'Started my studies as a Bachelor of ICT Engineering (Software)',
        jobTitle: 'Student'
      }
    ];
  }

  ngOnInit() {}
}
