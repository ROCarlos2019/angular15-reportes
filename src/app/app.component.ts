import { Component, ElementRef, ViewChild } from '@angular/core';
import { ExportFileService } from './services/exportFile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'axa-reportes';

  constructor(private exportFileService: ExportFileService) {
  }

  @ViewChild('userTable') userTable!: ElementRef;

  VIDEOGAMES = [
    {
      id: 1,
      name: "Animal Crossing",
      platform: "Nintendo Switch",
      reference: "1-770-736-8031"
    },
    {
      id: 2,
      name: "The Legend of Zelda: Ocarina of Time CV",
      platform: "Wii U",
      reference: "1-770-736-2323"
    },
    {
      id: 3,
      name: "Metal Gear Solid",
      platform: "Playstation (PSX)",
      reference: "1-4564-736-334"
    },
    {
      id: 4,
      name: "ShenMue",
      platform: "Sega Dreamcast",
      reference: "3-770-736-4532"
    },
    {
      id: 5,
      name: "Rise of the Tomb Raider",
      platform: "Playstation 4",
      reference: "1-324-736-3245"
    },
    {
      id: 6,
      name: "Resident Evil 2",
      platform: "Playstation",
      reference: "1-123-3336-4321"
    }
  ];

  downloadPDF() {
    this.exportFileService.exportPDF();
  }

  /**
   * Function prepares data to pass to export service to create excel from Table DOM reference
   *
   */
  exportExcel(): void {
    this.exportFileService.exportTableElmToExcel(this.userTable, 'ExcelSheet');
  }

  /**
    * Funtion prepares data to pass to export service to create csv from Json
    *
    */
  public exportCSV() {
    this.exportFileService.exportToCsv(this.VIDEOGAMES, 'user-data', ['id', 'name', 'platform', 'reference']);
  }

}
