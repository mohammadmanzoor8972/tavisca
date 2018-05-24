import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchResultPageComponent } from '../search-result-page/search-result-page.component';


@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: []
})
export class SearchWidgetComponent implements OnInit {
  @Output("searchHotelEvent") add = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(regForm:NgForm){
   this.add.emit(regForm.value);
  }

}
