import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from 'rxjs';

import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ITutorial } from '../../../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';
import { IAppEstruturaLinguagem } from '../../../../../liguagens/Linguagem-entities';

@Component({
  selector: 'app-treinamento-dialog',
  templateUrl: './treinamento-dialog.component.html',
  styleUrls: ['./treinamento-dialog.component.scss']
})
export class TreinamentoDialogComponent implements OnInit {

  TutorialLingua: ITutorial | undefined;

  constructor(
    protected dialogRef: MatDialogRef<TreinamentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Subject<IAppEstruturaLinguagem>) {
      data.subscribe(x =>{
        this.TutorialLingua = x.main.masterpage.tutorial;
      })
   }

  ngOnInit(): void {
  }

}
