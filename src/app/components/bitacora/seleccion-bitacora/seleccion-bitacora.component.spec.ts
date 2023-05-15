import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionBitacoraComponent } from './seleccion-bitacora.component';

describe('SeleccionBitacoraComponent', () => {
  let component: SeleccionBitacoraComponent;
  let fixture: ComponentFixture<SeleccionBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionBitacoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
