import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBackgroundComponent } from './digital-background.component';

describe('DigitalBackgroundComponent', () => {
  let component: DigitalBackgroundComponent;
  let fixture: ComponentFixture<DigitalBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
