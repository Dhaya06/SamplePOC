import {Validators, FormBuilder} from '@angular/forms';
import { Component,  OnInit,  ChangeDetectorRef, ViewChild, Input} from '@angular/core';
import { TileItemModel } from '../model/tile-items.service';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  clipBoardText:string="";
  @Input() Items:TileItemModel[]=[];
  @ViewChild('videoPlayer') videoplayer: any;


  // private cd: ChangeDetectorRef
  constructor( ) {
   
  }

  ngOnInit() {
  }

  copyToClipBoard(item)
  {
    this.clipBoardText=item.itemName;
    alert('copied to ClipBoard');
    debugger
  }

  //set video object and playable
  videoSource:any='assets/video/SampleVideo_1280x720_2mb (1).mp4';
  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }

}
