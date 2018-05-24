import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { SearchHotelItemComponent } from './search-hotel-item/search-hotel-item.component';
import { DataserviceService } from './dataservice.service';
import { ServicesService } from './services.service';
import { HotelServiceService } from './hotel-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchWidgetComponent,
    SearchPageComponent,
    SearchResultPageComponent,
    SearchHotelItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataserviceService,ServicesService,HotelServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
