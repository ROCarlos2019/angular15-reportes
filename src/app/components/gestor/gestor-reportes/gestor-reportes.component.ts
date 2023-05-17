import { Component } from '@angular/core';

@Component({
  selector: 'app-gestor-reportes',
  templateUrl: './gestor-reportes.component.html',
  styleUrls: ['./gestor-reportes.component.scss']
})
export class GestorReportesComponent {
  user: any;
  tipoReporteSelect: any;
  clasificacion: any;
  estatusReporteSelect: any;
  $data = [
    {
      claveCNFS: 'claveCNFS',
      tipoReporte: 'tipoReporte',
      folioReporte: 'folioReporte',
      fechaCreacion: 2023-10-20,
      folioCNSF: 102030
    }
  ];
  object: any;

}
