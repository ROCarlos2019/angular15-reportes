import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-catalogo',
  templateUrl: './lista-catalogo.component.html',
  styleUrls: ['./lista-catalogo.component.scss']
})
export class ListaCatalogoComponent {
  insertarFile(arg0: any) {
    throw new Error('Method not implemented.');
  }
  aceptar(arg0: any) {
    throw new Error('Method not implemented.');
  }
  regActualizar(arg0: number, arg1: any) {
    throw new Error('Method not implemented.');
  }
  tipodelSelect: any;
  cancel() {
    throw new Error('Method not implemented.');
  }
  uploadFile() {
    throw new Error('Method not implemented.');
  }
  okC() {
    throw new Error('Method not implemented.');
  }
  ok3() {
    throw new Error('Method not implemented.');
  }
  delete() {
    throw new Error('Method not implemented.');
  }
  ok() {
    throw new Error('Method not implemented.');
  }
  ejecutar(arg0: any) {
    throw new Error('Method not implemented.');
  }
  okUpdate() {
    throw new Error('Method not implemented.');
  }
  okError() {
    throw new Error('Method not implemented.');
  }
  salir() {
    throw new Error('Method not implemented.');
  }
  showDialog() {
    throw new Error('Method not implemented.');
  }
  dialog(arg0: number) {
    throw new Error('Method not implemented.');
  }
  showUpload() {
    throw new Error('Method not implemented.');
  }
  edit() {
    throw new Error('Method not implemented.');
  }
  user: any = { rol: 'rol' };
  msj: any;
  mensaje: any;
  tipo: any;
  $data = [{
    'claveCNFS': 'claveCNFS',
    'descripcionCNFS': 'descripcionCNFS',
    descripcionSecundariaCNFS: 'descripcionSecundariaCNFS'

  }];

  userForm = {
    $valid: true
  }

  file: File | undefined;
  constructor() {

  }


  onFileAdd(file: File) {
    this.file = file;
  }

  onFileRemove() {
    this.file = undefined;
  }

}
