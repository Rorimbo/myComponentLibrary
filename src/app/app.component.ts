import { Component } from '@angular/core';
import { HeaderLink } from './header/Types/link';
import { Tab } from './footer/Types/tab';
import { Button } from './footer/Types/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myComponentLibrary';

  companyName: string = 'Melanie';

  logoUrl: string =
    'https://site2.akmedya.com/medya/images/logo/sitelogo_3T0E.png';

  links: HeaderLink[] = [
    { text: 'Вкладка 1', url: '' },
    { text: 'Вкладка 2', url: '' },
  ];

  tabs: Tab[] = [
    {
      name: 'О компании',
      links: [
        { text: 'О компании1', url: '' },
        { text: 'О компании2', url: '' },
      ],
    },

    {
      name: 'О нас',
      links: [
        { text: 'О нас1', url: '' },
        { text: 'О нас2', url: '' },
        { text: 'О нас3', url: '' },
      ],
    },
  ];

  buttons: Button[] = [
    {
      url: 'assets/email.svg',
      action: 'mailto:example@mail.ru',
      altText: 'e-mail',
    },

    {
      url: 'assets/telegram.svg',
      action: 'https://t.me/rorimbo',
      altText: 'telegram',
    },

    {
      url: 'assets/youtube.svg',
      action: 'https://youtube.com',
      altText: 'youtube',
    },
  ];

  arr = [
    {
      Club: 'Barcelona',
      Player: 'Messi',
      Country: 'Argentina',
      Position: 'Forward',
      Number: 10,
    },
    {
      Club: 'Juventus',
      Player: 'Buffon',
      Country: 'Italy',
      Position: 'Goalkiper',
      Number: 1,
    },
    {
      Club: 'Inter',
      Player: 'Lukaku',
      Country: 'Belgium',
      Position: 'Forward',
      Number: 9,
    },
  ];
}
