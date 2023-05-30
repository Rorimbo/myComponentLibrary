import { Component } from '@angular/core';
import { Link } from './header/Types/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myComponentLibrary';

  logoUrl: string =
    'https://site2.akmedya.com/medya/images/logo/sitelogo_3T0E.png';

  links: Link[] = [
    { text: 'Вкладка 1', url: '' },
    { text: 'Вкладка 2', url: '' },
  ];
}
