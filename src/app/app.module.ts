import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExportFileService } from './services/exportFile.service';
import { HeadComponent } from './shared/head/head/head.component';
import { Head2Component } from './shared/head2/head2/head2.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { InfoComponent } from './shared/info/info/info.component';
import { MainComponent } from './components/main/main/main.component';
import { ReportesComponent } from './components/reportes/reportes/reportes.component';
import { FormularioReporteComponent } from './components/formulario/formulario-reporte/formularioReporte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaReportesComponent } from './components/listaReportes/lista-reportes/lista-reportes.component';
import { SeleccionReporteComponent } from './components/seleccion/seleccion-reporte/seleccion-reporte.component';
import { SeleccionBitacoraComponent } from './components/bitacora/seleccion-bitacora/seleccion-bitacora.component';
import { ModalComponent } from './shared/modal/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaCatalogoComponent } from './components/listaCatalogo/lista-catalogo/lista-catalogo.component';
import { GestorReportesComponent } from './components/gestor/gestor-reportes/gestor-reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    Head2Component,
    HeaderComponent,
    InfoComponent,
    MainComponent,
    ReportesComponent,
    FormularioReporteComponent,
    ListaReportesComponent,
    SeleccionReporteComponent,
    SeleccionBitacoraComponent,
    ModalComponent,
    ListaCatalogoComponent,
    GestorReportesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ExportFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
