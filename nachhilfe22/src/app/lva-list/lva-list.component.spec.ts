import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvaListComponent } from './lva-list.component';

describe('LvaListComponent', () => {
  let component: LvaListComponent;
  let fixture: ComponentFixture<LvaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
