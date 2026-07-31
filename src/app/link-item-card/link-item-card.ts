import { Component, input } from '@angular/core';
import { LinkItem } from '../link-item';

@Component({
  selector: 'app-link-item-card',
  imports: [],
  template: ` <a [href]="item().url">
                <h2>{{ item().title }}</h2>
                <p>{{ item().description }}</p>
              </a> `,
  styleUrl: './link-item-card.scss',
})
export class LinkItemCard {
  readonly item = input.required<LinkItem>();
}
