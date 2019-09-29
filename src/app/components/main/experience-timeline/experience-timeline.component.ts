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
        ].sort()
      },
      {
        icon: '🌟',
        dateStart: 'February 2018',
        description: 'Graduated BSc of Software Engineering'
      },
      {
        icon: '🏆',
        dateStart: 'January 2018',
        jobTitle: 'Bachelor Project Award',
        company: 'VIA University College',
        keywords: ['AR Applications', '.NET Code', 'WebSockets', 'RabbitMQ', 'HoloLens'],
        description:
          // tslint:disable-next-line: max-line-length
          '"For the courage to take on a project of very high technological complexity, and for applying the complex technology with a constant eye to common sense, and practical use. And, in the end, making it all work."'
      },
      {
        icon: '🏢',
        company: 'EConGrid',
        dateEnd: 'February 2018',
        dateStart: 'February 2017',
        jobTitle: 'Student Software Engineer',
        keywords: ['ASP.NET Core', 'Angular.JS', 'WebSockets'].sort()
      },
      {
        icon: '🏢',
        company: 'EConGrid',
        jobTitle: 'Software Engineer Intern',
        dateStart: 'August 2016',
        dateEnd: 'January 2017',
        keywords: ['ASP.NET', 'REST APIs', 'WebSockets', 'Angular.JS'].sort()
      },
      {
        icon: '🏢',
        company: 'InnoGames GmbH',
        dateEnd: 'August 2017',
        dateStart: 'July 2016',
        jobTitle: 'Community Manager',
        keywords: ['Team Management', 'MediaWiki', 'QA', 'Leadership', 'JavaScript', 'Social Media'].sort()
      },
      {
        icon: '🏢',
        company: 'VIA University College',
        dateEnd: 'January 2016',
        dateStart: 'August 2015',
        jobTitle: 'Student Lecturer',
        keywords: ['Teaching', 'Java'].sort()
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
