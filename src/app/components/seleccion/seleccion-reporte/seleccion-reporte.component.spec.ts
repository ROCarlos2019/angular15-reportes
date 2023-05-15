import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionReporteComponent } from './seleccion-reporte.component';

describe('SeleccionReporteComponent', () => {
  let component: SeleccionReporteComponent;
  let fixture: ComponentFixture<SeleccionReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
