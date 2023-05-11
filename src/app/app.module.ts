import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExportFileService } from './services/exportFile.service';
import { HeadComponent } from './shared/head/head/head.component';
import { Head2Component } from './shared/head2/head2/head2.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { InfoComponent } from './shared/info/info/info.component';
import { MainComponent } from './components/main/main/main.component';
import { ReportesComponent } from './components/reportes/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    Head2Component,
    HeaderComponent,
    InfoComponent,
    MainComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExportFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
