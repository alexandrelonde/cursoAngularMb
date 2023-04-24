import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  //string com type inference
  name: string = 'Alexandre';

  //number com type inference
  age: number = 30;

  //string sem type inference
  job = 'Programador';

  //array
  hobbies = ['Correr', 'Jogar', 'Estudar'];

  //object
  car = {
    name: "Polo",
    year: 2019,
  };

  constructor(){}

  ngOnInit(): void {

  }

}
