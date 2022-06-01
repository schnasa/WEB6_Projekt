import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvaDetailsComponent } from './lva-details.component';

describe('LvaDetailsComponent', () => {
  let component: LvaDetailsComponent;
  let fixture: ComponentFixture<LvaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
