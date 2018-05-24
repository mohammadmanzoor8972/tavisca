import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { HotelServiceService } from '../hotel-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: []
})
export class SearchResultPageComponent implements OnInit {
  
  private searchParam:any;
  private hotelResult:any = [];
  private currentSession:any;
  constructor(private data: DataserviceService, private http:HotelServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.searchParam = message)
    console.log(this.searchParam);
    this.hotelResult.hotels = [];
      console.log(this.data);
      if(this.searchParam.checkin){
      this.getHotelList(this.searchParam);
      }
  

  }

  searchHotel($event){
    this.getHotelList($event);
  }

  getHotelList(data){
    var that = this;
    this.http.getCurrentSession(data).subscribe(function(resp:any){    
      if(resp._body){      
        that.currentSession = JSON.parse(resp._body).sessionId;
        that.http.getSessionStatus(that.currentSession).subscribe(function(resp:any){
          var status = JSON.parse(resp._body).status;
            that.http.getHotelList(that.currentSession).subscribe(function(hotelList:any){
              console.log(hotelList)
              that.hotelResult = JSON.parse(hotelList._body);
            });
        },function(err){
          if(err._body)
          alert(JSON.parse(err._body).message)
        })
      } else if(resp.code){
        alert(resp.message);
      }
      console.log(that.currentSession);
     }, function(err){
       if(err._body)
       alert(JSON.parse(err._body).message)
     })
  }

}
