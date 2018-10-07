import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCtfComponent } from './edit-ctf.component';

describe('EditCtfComponent', () => {
  let component: EditCtfComponent;
  let fixture: ComponentFixture<EditCtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
