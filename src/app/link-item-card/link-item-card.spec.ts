import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkItemCard } from './link-item-card';

describe('LinkItemCard', () => {
  let component: LinkItemCard;
  let fixture: ComponentFixture<LinkItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkItemCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkItemCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
