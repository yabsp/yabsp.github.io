import { TestBed } from '@angular/core/testing';

import { LinkItems } from './link-items';

describe('LinkItems', () => {
  let service: LinkItems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkItems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
