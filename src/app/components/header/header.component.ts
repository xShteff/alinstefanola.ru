import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'aso-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  public contactMethods: Contact[];

  constructor() {
    this.contactMethods = [
      {
        icon: 'mail',
        target: '',
        theme: 'fill',
        url: 'mailto:alinstefanolaru@gmail.com',
        label: 'Send me an e-mail!'
      },
      {
        icon: 'github',
        target: '_blank',
        theme: 'outline',
        url: 'https://github.com/alstol',
        label: 'GitHub'
      },
      {
        icon: 'linkedin',
        target: '_blank',
        theme: 'fill',
        url: 'https://www.linkedin.com/in/alinstefanolaru/',
        label: 'LinkedIn'
      },
      {
        icon: 'twitter',
        target: '_blank',
        theme: 'outline',
        url: 'https://twitter.com/xshteff/',
        label: 'Twitter'
      }
    ];
  }
}
