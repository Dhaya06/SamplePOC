import { Component, OnInit, Input } from '@angular/core';
import { TileItemModel } from '../../model/tile-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() TileItems:any;
  ClipBoard:string="";
  placeHolder:string="assets/img/placeholder/placeholder.png"
  constructor() { }

  ngOnInit() {
  }
  CopytoClipBoard(list)
  {

    this.ClipBoard=list.itemSrc;
    alert('copied ')
  }
}
