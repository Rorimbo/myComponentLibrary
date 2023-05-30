import { Component, Input } from '@angular/core';
import { Link } from './Types/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() logoUrl: string;
  @Input() links: Link[];
}
