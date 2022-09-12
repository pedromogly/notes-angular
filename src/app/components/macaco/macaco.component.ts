import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-macaco',
  templateUrl: './macaco.component.html',
  styleUrls: ['./macaco.component.css']
})
export class MacacoComponent implements OnInit {
  name: string = 'Macaco';
  age: number = 10000000;
  job = 'datilografia da gk';
  hobbies = ['teu pai','tua mãe','tua vó','ta cringe'];
  carro = {
    marca: 'cachorro loco',
    ano: 1914,
    descricao: 'sai dai cachorro',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
