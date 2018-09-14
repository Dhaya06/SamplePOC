import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileModule } from './tile/tile.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  TileItemModel } from './model/tile-items.service';
import { MediaServiceService } from './media-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TileModule ,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TileItemModel,MediaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
