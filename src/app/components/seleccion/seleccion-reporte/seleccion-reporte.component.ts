import { Component } from '@angular/core';

@Component({
  selector: 'app-seleccion-reporte',
  templateUrl: './seleccion-reporte.component.html',
  styleUrls: ['./seleccion-reporte.component.scss']
})
export class SeleccionReporteComponent {
  ok() {
    throw new Error('Method not implemented.');
  }
  salir() {
    throw new Error('Method not implemented.');
  }
  detalleReporte() {
    throw new Error('Method not implemented.');
  }

  tipoReporteSelect = [
    { descripcionCNFS: 'descripcionCNFS' }
  ];

  organoSupervisorSelect = [
    { _id: 1, descripcionCNFS: 'descripcionCNFS' }
  ]

  sujetoObligadoSelect = [
    { _id: 1, descripcionCNFS: 'descripcionCNFS' }
  ]

  anoSelect = [
    { _id: 1, ano: 2021 }
  ]

  mesSelect = [
    { _id: 1, mes: 10 }
  ]

}
