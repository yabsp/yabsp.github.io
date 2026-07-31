import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkItems } from './link-items';
import { LinkItemCard } from './link-item-card/link-item-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkItemCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('yanick.spichty.org');
  private readonly linkItems = inject(LinkItems);
  readonly items = this.linkItems.all;
}
