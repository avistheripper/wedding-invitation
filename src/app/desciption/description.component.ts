import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  @Input() guestsList: Array<string>;
  @Input() isTranslated: boolean;
  daysList = [
    {
      event: "Welcome party & Cocktails",
      date: "SATURDAY, AUGUST 14TH",
      place: `'Pecherskie peski', Grebnoy kanal Embankment, 107, <br> Nizhny Novgorod`
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

}
