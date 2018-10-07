import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCtfComponent } from './create-ctf.component';

describe('CreateCtfComponent', () => {
  let component: CreateCtfComponent;
  let fixture: ComponentFixture<CreateCtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
