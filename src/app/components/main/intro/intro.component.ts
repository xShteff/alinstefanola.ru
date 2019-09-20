import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from 'src/app/services/date-utils.service';

@Component({
  selector: 'aso-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {
  public age: number;
  constructor(private dateUtils: DateUtilsService) {
    this.age = this.dateUtils.yearsSince('1995-03-19');
  }

  ngOnInit() {}
}
