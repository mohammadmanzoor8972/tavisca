import {Injectable} from '@angular/core';


@Injectable()
export class ServicesService {
  private searchURL = "https://public-be.oski.io/hotel/v1.0/search/init";
  constructor() { }

  searchHotel(){
  //  return this.http.post(this.searchURL,{});
  }
}
