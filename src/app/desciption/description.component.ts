import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  daysList = [
    { 
      event: "Welcome party & Cocktails",
      date: "SATURDAY, AUGUST 14TH",
      place: "'Pecherskie peski', Ulitsa Rodionova, 180,  Nizhny Novgorod" 
    },
    { 
      event: "Wedding ceremony",
      date: "SUNDAY, AUGUST 15TH",
      place: "Restaurant Novo, Sloboda Pechery, 110A, Nizhny Novgorod" 
  }
  ]

  colorsList = [
    { text: 'Color #1', color: '#2c53a2' },
    { text: 'Color #2', color: '#47894b' },
    { text: 'Color #3', color: '#FFFAFA' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
