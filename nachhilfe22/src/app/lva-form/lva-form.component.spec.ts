import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvaFormComponent } from './lva-form.component';

describe('LvaFormComponent', () => {
  let component: LvaFormComponent;
  let fixture: ComponentFixture<LvaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
