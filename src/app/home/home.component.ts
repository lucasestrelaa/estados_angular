import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dados = [
    {
      "nome": "Lucas",
      "idade": 26,
    },
    {
      "nome": "Lucas1",
      "idade": 21,
    },
    {
      "nome": "Lucas2",
      "idade": 22,
    },
    {
      "nome": "Lucas3",
      "idade": 23,
    },
  ]


}
