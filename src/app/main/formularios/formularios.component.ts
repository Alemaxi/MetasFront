import { Component, OnInit } from '@angular/core';

import { PerfilDadosFormulario } from '../Shared/Entities/Formulario-metas/perfil-dados-formulario';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formDatas: PerfilDadosFormulario[] = [
    {ata:true,formMetas:'form',nomeGestor:'isaque',npGestor:'0asf',
    ritmo:1,status:'pronto',ultAtualizacao: new Date()},
    {ata:false,formMetas:'form',nomeGestor:'isaque',npGestor:'0asf',
    ritmo:1,status:'pronto',ultAtualizacao: new Date()},
    {ata:false,formMetas:'form',nomeGestor:'isaque',npGestor:'0asf',
    ritmo:1,status:'pronto',ultAtualizacao: new Date()},
    {ata:false,formMetas:'form',nomeGestor:'isaque',npGestor:'0asf',
    ritmo:1,status:'pronto',ultAtualizacao: new Date()},
  ]
}
