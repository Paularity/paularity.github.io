/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BibleStudyComponent } from './bible-study.component';

describe('BibleStudyComponent', () => {
  let component: BibleStudyComponent;
  let fixture: ComponentFixture<BibleStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
