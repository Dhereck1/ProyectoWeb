import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitasAdminComponent } from './listar-citas-admin.component';

describe('ListarCitasAdminComponent', () => {
  let component: ListarCitasAdminComponent;
  let fixture: ComponentFixture<ListarCitasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
