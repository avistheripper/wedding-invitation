import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent {
  @Input() guestsList: string[];
  @Input() isTranslated: boolean;
  lat = 51.678418;
  lng = 7.809007;
}
