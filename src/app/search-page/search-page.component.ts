import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: []
})
export class SearchPageComponent implements OnInit {

  constructor(private router:Router , private data : DataserviceService) { }

  ngOnInit() {
  }

  searchHotel($event){
    this.data.changeMessage($event);
    this.router.navigateByUrl("/searchResult");
  }
}
