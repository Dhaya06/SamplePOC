import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TileItemModel {

  itemID: number;
  itemName:string;
  itemSrc:string;
  item:any;
  itemURL:string;
  type:string;


  constructor() { }
}
