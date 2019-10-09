import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetaillsComponent } from './employees-detaills.component';

describe('EmployeesDetaillsComponent', () => {
  let component: EmployeesDetaillsComponent;
  let fixture: ComponentFixture<EmployeesDetaillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesDetaillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
