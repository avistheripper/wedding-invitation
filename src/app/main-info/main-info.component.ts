import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  guestsList: string[] = [];
  lat = 51.678418;
  lng = 7.809007;
  isTranslated: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.guestsList = params['guests']?.split('_');
      this.isTranslated = this.guestsList && this.guestsList.includes("rus-en");
  });
  }

}
