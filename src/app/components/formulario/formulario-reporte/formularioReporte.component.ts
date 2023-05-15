import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal/modal.component';

@Component({
  selector: 'app-formularioReporte',
  templateUrl: './formularioReporte.component.html',
  styleUrls: ['./formularioReporte.component.scss']
})
export class FormularioReporteComponent {

  /**
   * Variable declaradas para el llamado al modal
   *
   * @private
   * @type {ModalComponent}
   * @memberof FormularioReporteComponent
   */
  @ViewChild('confirmationModal')
  private modalComponent!: ModalComponent;
  modalStyle: string = 'modal-style-success';
  modalTitle: string = 'Success Confirmation';
  modalBody: string = 'This is a Information Confirmation message';
  modalButtonColor: string = 'btn-success';

  async openModal() {
    return await this.modalComponent.open();
  }

  getConfirmationValue(value: any) {
    if (value == 'Save click') {
      console.log(value);
    }
  }

  open() {
    this.openModal();
  }

  cancelError() {
    throw new Error('Method not implemented.');
  }
  regresar() {
    throw new Error('Method not implemented.');
  }
  cancel() {
    throw new Error('Method not implemented.');
  }
  showDialog() {
    throw new Error('Method not implemented.');
  }
  openNacimiento(arg0: number) {
    throw new Error('Method not implemented.');
  }
  openDetencion(arg0: number) {
    throw new Error('Method not implemented.');
  }
  open2(arg0: number) {
    throw new Error('Method not implemented.');
  }


  levelNum: number = 0;
  tipoReporteSelect: Array<any> = [
    { num: 0, name: "AA" },
    { num: 1, name: "BB" }
  ];

  organoSupervisorSelect = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ];
  sujetoObligadoSelect = [
    { id: '0', descripcion: 'descripcion' }
  ];
  localidadEstadoSelect = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ];
  localidadSelect = [
    { id: '0', descripcionSecundariaCNFS: 'descripcionSecundariaCNFS' }
  ];
  tipoOperacionSelect = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ]
  instrumentoMonetarioSelect = [
    { id: 0, descripcionCNFS: 'descripcionCNFS' }
  ]
  tipoMonedaSelect = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ]
  nacionalidadSelect = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ]
  tipoPersonaSelect = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ]
  actividadEconomicaSelect = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ]
  tipoMonedaSelect4 = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ]
  tipoMonedaSelect5 = [
    { id: '0', descripcionCNFS: 'descripcionCNFS' }
  ]

  dataRegistro = {
    alertId: 'ok',
    caseId: 'caseId',
    periodo: 'periodo',
    folio: 'folio',
    organoSupervisor: 'organoSupervisor',
    sujetoObligado: 'sujetoObligado',
    localidad: 'localidad',
    sucursal: 'sucursal',
    tipoOperacion: 'tipoOperacion',
    instrumentoMonetario: 'instrumentoMonetario',
    numeroPoliza: 'numeroPoliza',
    montoPrima: 'montoPrima',
    tipoMoneda: 'tipoMoneda',
    nacionalidad: 'nacionalidad',
    tipoPersona: 'tipoPersona',
    fechaOperacion: 'fechaOperacion',
    fechaDetencion: 'fechaDetencion',
    razonSocial: 'razonSocial',
    nombreCont: 'nombreCont',
    apellidoPaternoCont: 'apellidoPaternoCont',
    apellidoMaternoCont: 'apellidoMaternoCont',
    rfc: 'rfc',
    curp: 'curp',
    fechaNacimiento: 'fechaNacimiento',
    domicilio: 'domicilio',
    colonia: 'colonia',
    localidadCliente: 'localidadCliente',
    telefono: 'telefono',
    actividadEconomica: 'actividadEconomica',
    nombreAgente: 'nombreAgente',
    apellidoPaternoAgente: 'apellidoPaternoAgente',
    apellidoMaternoAgente: 'apellidoMaternoAgente',
    rfcAgente: 'rfcAgente',
    curpAgente: 'curpAgente',
    personasRelacionadas: 'personasRelacionadas',
    polizasRelacionadas: 'polizasRelacionadas',
    claveSujetoObligado: 'claveSujetoObligado',
    nombrePersonaRelacionada: 'nombrePersonaRelacionada',
    apellidoPaternoPersonaRelacionada: 'apellidoPaternoPersonaRelacionada',
    apellidoMaternoPersonaRelacionada: 'apellidoMaternoPersonaRelacionada',
    descripcionOperacion: 'descripcionOperacion',
    razones: 'razones'

  }

  userForm = {
    alertId: false,
    caseId: false,
    periodo: false,
    poliza: false,
    numeroPoliza: false,
    montoPrima: false,
    fechaOperacion: false,
    fechaDetencion: false,
    razonSocial: false,
    nombre: false,
    apPaterno: false,
    apMaterno: false,
    rfc: false,
    rfcInvalid: false,
    curp: false,
    fechaNacimiento: false,
    domicilio: false,
    colonia: false,
    telefono: false,
    nombreAgente: false,
    apellidoPaternoAgente: false,
    apellidoMaternoAgente: false,
    rfcAgente: false,
    curpAgente: false,
    personaRelacionada: false,
    polizasRelacionadas: false,
    claveSujetoObligado: false,
    nombrePersonaRelacionada: false,
    apPaRel: false,
    apMaRel: false,
    descripcionOperacion: false,
    razones: false
  }

  isConsulta = false;
  disabledPeriodo = false;
  estadoReporte = false;
  disableRazon = false;
  disablePersona = false;
  estado: any;

}
