import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas-stepper',
  templateUrl: './metas-stepper.component.html',
  styleUrls: ['./metas-stepper.component.scss']
})
export class MetasStepperComponent implements OnInit {

  constructor() { }

  @Input() status:number = 0;

  ngOnInit(): void {
  }

  biggerOrEqualTo(num: number): boolean {
    return !(num <= this.status);
  }
}
