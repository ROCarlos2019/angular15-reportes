import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  user = {
    mx: '10203040',
    name: 'Roberto Carlos'
  }

}
