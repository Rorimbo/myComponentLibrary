import { Component, Input } from '@angular/core';
import { Tab } from './Types/tab';
import { Button } from './Types/button';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() tabs: Tab[];
  @Input() companyName: string = 'Rorimbo';
  @Input() buttons: Button[];

  currentYear: string = new Date().getFullYear().toString();
}
