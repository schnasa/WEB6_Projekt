import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvaListItemComponent } from './lva-list-item.component';

describe('LvaListItemComponent', () => {
  let component: LvaListItemComponent;
  let fixture: ComponentFixture<LvaListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvaListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
