import { Component, Input } from '@angular/core';
import { JobEvent } from 'src/app/models/job-event';

@Component({
  selector: 'aso-job-event',
  templateUrl: './job-event.component.html',
  styleUrls: ['./job-event.component.less']
})
export class JobEventComponent {
  @Input() public job?: JobEvent;
}
