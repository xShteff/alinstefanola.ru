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
        company: 'LEGO Group',
        dateEnd: 'Current',
        dateStart: 'September 2019',
        jobTitle: 'Junior IT Engineer'
      },
      {
        company: 'EConGrid',
        dateEnd: 'February 2018',
        dateStart: 'February 2017',
        jobTitle: 'Student Software Engineer'
      },
      {
        company: 'EConGrid',
        jobTitle: 'Software Engineer Intern',
        dateStart: 'August 2016',
        dateEnd: 'January 2017'
      },
      {
        company: 'InnoGames GmbH',
        dateEnd: 'August 2017',
        dateStart: 'July 2016',
        jobTitle: 'Community Manager'
      },
      {
        company: 'VIA University College',
        dateEnd: 'January 2016',
        dateStart: 'August 2015',
        jobTitle: 'Student Lecturer'
      }
    ];
  }

  ngOnInit() {}
}
