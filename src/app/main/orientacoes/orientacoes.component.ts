import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientacoes',
  templateUrl: './orientacoes.component.html',
  styleUrls: ['./orientacoes.component.scss']
})
export class OrientacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text(){
    console.log("oi");
  }
}
