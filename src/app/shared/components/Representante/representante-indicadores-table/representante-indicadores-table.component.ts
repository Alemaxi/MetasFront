import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';

import { RepresentanteIndicadorEntity } from '../../../Entities/Dashboard/representante/representante-indicador-entity';
import { FormularioIndicadorEntity } from '../../../Entities/Dashboard/representante/formulario-state-indicador';
import { ITabelaCampos } from '../../../../../liguagens/Linguagem-modulos/home-linguagem-entities';
import { edicaoTabelaEnum } from '../../../Enum/edicao-tabela-enum';

import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-representante-indicadores-table',
  templateUrl: './representante-indicadores-table.component.html',
  styleUrls: ['./representante-indicadores-table.component.scss']
})
export class RepresentanteIndicadoresTableComponent implements OnInit {

  @Input() formStateEntry = new Subject<FormularioIndicadorEntity>();
  @Input() tabelaLinguagem: ITabelaCampos | undefined;
  @Input() showSelect: boolean = true;
  @Input() edicao: edicaoTabelaEnum = 1;

  @Output() registroMudado = new EventEmitter<FormularioIndicadorEntity>();

  formState: FormularioIndicadorEntity = new FormularioIndicadorEntity();

  constructor(
  ) { }


  ngOnInit(): void {
    this.formStateEntry.subscribe(x => {
      this.formState = x;
      if (this.formState.indicadores.filter(x => x.novoIndicador).length == 0)
        this.AddNovoIndicador();
    })
  }

  AddNovoIndicador(): void {
    if (this.formState.indicadores.length < 6) {

      let newIndicador = new RepresentanteIndicadorEntity();
      newIndicador.novoIndicador = true;
      this.formState.indicadores.push(newIndicador);

      newIndicador.codNovoIndicador = this.formState.indicadores.filter(x => {
        return x.novoIndicador
      }).length;

    }
  }

  GetFrequenciaTotal(): number {
    let result: number = 0;

    this.formState.indicadores.forEach((x: RepresentanteIndicadorEntity) => {
      result += x.peso as number;
    })

    return result;
  }

  ChangeMainCheck(item: MatCheckboxChange): void {
    if (item.checked) {
      this.formState.indicadores.forEach(x => {
        x.selected = true;
      })
    } else {
      this.formState.indicadores.forEach(x => {
        x.selected = false;
      })
    }
  }

  AllChecked(): boolean {
    let result: boolean = true;

    this.formState.indicadores.forEach(x => {
      if (!x.selected) {
        result = false;
      }
    })
    return result;
  }

  GetNovosIndicadores(): RepresentanteIndicadorEntity[] {
    return this.formState.indicadores.filter(x => x.novoIndicador);
  }

  GetIndicadoresRegistrados(): RepresentanteIndicadorEntity[] {
    return this.formState.indicadores.filter(x => !x.novoIndicador);
  }

  ChangeRow(item: MatCheckboxChange, indicador: RepresentanteIndicadorEntity) {
    indicador.selected = item.checked;
  }

  MudancaNoNovoRegistro(idAtual: number | undefined): void {
    if (idAtual != undefined && idAtual == this.formState.indicadores.
      filter(x => x.novoIndicador).length) {
      this.AddNovoIndicador();
    }
    this.registroMudado.emit(this.formState);
  }

  MudancaNoRegistro(): void {
    this.registroMudado.emit(this.formState);
  }
}
