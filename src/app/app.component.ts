import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'MetasFront';


  constructor(matRegistry: MatIconRegistry){
    matRegistry.addSvgIcon('dashboard','../assets/icons/svg/dashboard.svg');
  }

  
}
