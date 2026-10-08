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
    {
      title: 'tmux Cheat Sheet',
      description:
        'Minimal reference for tmux sessions, windows, panes and copy mode.',
      url: '/tmux-cheatsheet/',
      kind: 'guide'
    },
    {
      title: 'Vim Cheat Sheet',
      description:
        'Minimal reference for editing in Vim: visual mode, search, replace, copy and paste.',
      url: '/vim-cheatsheet/',
      kind: 'guide'
    },
  ]);
  readonly all = this.linkItems.asReadonly();
  add(linkItem: LinkItem): void {
    this.linkItems.update((current) => [...current, linkItem]);
  }
}