import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HotelServiceService {

  private sessionURL:string = "https://public-be.oski.io/hotel/v1.0/search/init";
  private sessionStatus:string = "https://public-be.oski.io/hotel/v1.0/search/status";
  private searchHotelUrl:string = "https://public-be.oski.io/hotel/v1.0/search/results";
  private headerParam:any = {'oski-tenantId':'Demo'}
  private session:string;
  
  private initParam = {
    "currency": "USD",
    "posId": "hbg3h7rf28",
    "orderBy": "price asc, rating desc",
    "roomOccupancies": [
       {
          "occupants": [
             {
                "type": "Adult",
                "age": 25
             }
          ]
       }
    ],
    "stayPeriod": {
       "start": "05/22/2018",
       "end": "05/30/2018" 
    },
       "bounds": {
       "circle": {
          "center": {
             "lat": 49.0097, 
             "long": 2.5479
          },
          "radiusKm": 50.5
       }
    }
 };   

 private searchParam = {
  "sessionId": "",
  "paging": {
     "pageNo": 1,
     "pageSize": 5,
     "orderBy": "price asc, rating desc"
  },
  "optionalDataPrefs": [
     "All"
  ],
  "currency": "USD",
  "contentPrefs": [
     "Basic",
     "Activities",
     "Amenities",
     "Policies",
     "AreaAttractions",
     "Descriptions",
     "Images",
     "CheckinCheckoutPolicy",
     "All"
  ],
  "filters": {
     "minHotelPrice": 1,
     "maxHotelPrice": 10000,
     "minHotelRating": 1,
     "maxHotelRating": 5,
     "hotelChains": [
        "Novotel",
        "Marriott",
        "Hilton",
        "Accor"
     ],
     "allowedCountry": "FR"
  }
}


  constructor(private http:Http) { }
  
  getCurrentSession(param:any){
    var that = this;
    this.initParam.stayPeriod.start = param.checkin;
    this.initParam.stayPeriod.end = param.checkout;
    return this.http.post(this.sessionURL,this.initParam,{headers : this.headerParam});
  }

  getSessionStatus(session){
    var param:any = {
      "sessionId": session
   }
    return this.http.post(this.sessionStatus,param,{headers : this.headerParam});
  }

  getHotelList(session){
    var param:any = {
      "sessionId": session
   }
    return this.http.post(this.searchHotelUrl,param,{headers : this.headerParam});
  }

}
