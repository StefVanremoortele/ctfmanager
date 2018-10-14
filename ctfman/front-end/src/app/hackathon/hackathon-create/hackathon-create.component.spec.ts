import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonCreateComponent } from './hackathon-create.component';

describe('HackathonCreateComponent', () => {
  let component: HackathonCreateComponent;
  let fixture: ComponentFixture<HackathonCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
