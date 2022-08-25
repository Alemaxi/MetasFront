import { Component, Input, OnInit } from '@angular/core';

import { IStepper } from '../../../../liguagens/Linguagem-modulos/home-linguagem-entities';

@Component({
  selector: 'app-metas-stepper',
  templateUrl: './metas-stepper.component.html',
  styleUrls: ['./metas-stepper.component.scss']
})
export class MetasStepperComponent implements OnInit {

  constructor() { }

  @Input() status:number = 0;
  @Input() stepperLinguagem: IStepper | undefined;

  ngOnInit(): void {
  }

  biggerOrEqualTo(num: number): boolean {
    return (this.status >= num);
  }
}
