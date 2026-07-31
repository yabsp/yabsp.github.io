import { Injectable, signal } from '@angular/core';
import { LinkItem } from './link-item';

@Injectable({
  providedIn: 'root',
})
export class LinkItems {
  private readonly linkItems = signal<LinkItem[]>([
    {
      title: 'Media Server Guide',
      description:
        'Self-host a Debian media server with Plex, the *arr apps and a VPS gateway.',
      url: '/media-server-guide/',
      kind: 'guide'
    },
  ]);
  readonly all = this.linkItems.asReadonly();
  add(linkItem: LinkItem): void {
    this.linkItems.update((current) => [...current, linkItem]);
  }
}