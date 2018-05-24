import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-hotel-item',
  templateUrl: './search-hotel-item.component.html',
  styleUrls: ['./search-hotel-item.component.css']
})
export class SearchHotelItemComponent implements OnInit {

  constructor() { }
@Input("hotelItem") hotelItem:any;

  ngOnInit() {
    console.log(this.hotelItem);
  }

}
