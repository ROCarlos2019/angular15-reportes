import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent {
  row = {
    goldenRecord: 'true',
    idClienteUnico: 'SI',
    poliza: '10203040',
    producto: 'Estatus',
    inicioVigencia: '10-05-2023',
    finVigencia: '12-12-2023',
    nombre: 'Roberto Carlos',
    apellidoPaterno: 'Pineda',
    apellidomaterno: 'Tabarez',
    fechaNacimiento: '26-12-2023',
    curp: 'PITR931226HGRNBB05',
    domicilio: 'Conocido'
  }

}
