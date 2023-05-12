import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.scss']
})
export class ListaReportesComponent {
msj: any;
ok() {
throw new Error('Method not implemented.');
}
salir() {
throw new Error('Method not implemented.');
}
irReporte() {
throw new Error('Method not implemented.');
}
  $index: any;
tipoReporteSelect = [
  {descripcionCNFS: 'descripcionCNFS'}
];
  validaCheck(arg0: any, arg1: string, arg2: any, arg3: any, arg4: any) {
    throw new Error('Method not implemented.');
  }

  reportesList = [
    {
      datos: 'datos',
      folioReporte: 'folioReporte',
      checked: true,
      nombreReporte: 'nombreReporte',
      _id: '_id',
      isVacio: true,
      fechaCreacion: '10-20-2023',
      tipoReporte: 1
    }
  ];
  user: any;

}
