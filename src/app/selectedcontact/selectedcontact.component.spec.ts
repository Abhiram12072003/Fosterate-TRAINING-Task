import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcontactComponent } from './selectedcontact.component';

describe('SelectedcontactComponent', () => {
  let component: SelectedcontactComponent;
  let fixture: ComponentFixture<SelectedcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
