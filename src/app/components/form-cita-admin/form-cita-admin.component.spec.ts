import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCitaAdminComponent } from './form-cita-admin.component';

describe('FormCitaAdminComponent', () => {
  let component: FormCitaAdminComponent;
  let fixture: ComponentFixture<FormCitaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCitaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCitaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
