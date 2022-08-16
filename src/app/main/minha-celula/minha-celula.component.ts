import { Component, OnInit } from '@angular/core';

import { IMinhaCelulaInfo } from '../Shared/Entities/Minha-celula/minha-celula-info';
import { IPerfilDadosCelula } from '../Shared/Entities/Minha-celula/Perfil-dados-Celula';

@Component({
  selector: 'app-minha-celula',
  templateUrl: './minha-celula.component.html',
  styleUrls: ['./minha-celula.component.scss']
})
export class MinhaCelulaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public infos: IMinhaCelulaInfo = {
    areaRh:"uma área ai",
    ciclo:new Date(),
    numColaboradores:9
  }

  public tableDatas: IPerfilDadosCelula[] = [
    {email:'email',nomeCompleto:'algum nome',numeroPessoal:'algum numero',titulo:'titulo'},
    {email:'email',nomeCompleto:'algum nome',numeroPessoal:'algum numero',titulo:'titulo'},
    {email:'email',nomeCompleto:'algum nome',numeroPessoal:'algum numero',titulo:'titulo'},
    {email:'email',nomeCompleto:'algum nome',numeroPessoal:'algum numero',titulo:'titulo'}
  ]
}
