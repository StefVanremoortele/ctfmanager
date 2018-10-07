import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureTheFlagComponent } from './capture-the-flag.component';

describe('CaptureTheFlagComponent', () => {
  let component: CaptureTheFlagComponent;
  let fixture: ComponentFixture<CaptureTheFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureTheFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureTheFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
