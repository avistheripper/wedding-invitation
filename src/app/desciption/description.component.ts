import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  guestsList: Array<string> = [];
  isTranslated: boolean;
  daysList = [
    { 
      event: "Welcome party & Cocktails",
      date: "SATURDAY, AUGUST 14TH",
      place: `'Pecherskie peski', Ulitsa Rodionova, 180, <br> Nizhny Novgorod`
    },
    { 
      event: "Wedding ceremony",
      date: "SUNDAY, AUGUST 15TH",
      place: `Restaurant NOVO, Sloboda Pechery, 110A, <br> Nizhny Novgorod`
  }
  ]

  colorsList = [
    { text: 'Color #1', color: '#2c53a2' },
    { text: 'Color #2', color: '#47894b' },
    { text: 'Color #3', color: '#FFFAFA' }
  ]

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.guestsList = params['guests']?.split('_');
      this.isTranslated = this.guestsList && this.guestsList.includes("rus-en");
  });
  }

}
