import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstClueComponent } from './first-clue.component';

describe('FirstClueComponent', () => {
  let component: FirstClueComponent;
  let fixture: ComponentFixture<FirstClueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstClueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstClueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
