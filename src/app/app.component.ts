import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from "@angular/forms";
import { TileItemModel } from "./model/tile-items.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  //properties
  title = "myProg";
  form_Group: FormGroup;
  url: any;
  formGroup = this.fgb.group({
    file: [null, Validators.required]
  });
  SelectedImageEvent: any = null;
  Items: any[] = [];
  ItemCount = 0;
  item: TileItemModel;
  griView: boolean = true;
  listView: boolean =false;


  constructor(
    private fgb: FormBuilder,
    private resolver: ComponentFactoryResolver
  ) {
    this.form_Group = new FormGroup({
      fileType: new FormControl()
    });
  }
  ngOnInit(): void {
    this.createSampleVideoObject();
  }

  //initiate video tile
  createSampleVideoObject() {
    this.item = new TileItemModel();
    this.item.itemSrc = "/assets/video/SampleVideo_1280x720_2mb.mp4";

    this.item.itemID = this.ItemCount;
    this.item.itemName = "Sample Video";
    this.item.type = "video";
    this.Items.push(this.item);
  }

  //read object when selecting image
  readSelectedObject(event: any) {
    this.item = new TileItemModel();
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.item.itemSrc = event.target.result;
        debugger;
        this.item.itemID = this.ItemCount;
        this.item.itemName = "asd";
        this.item.type = "image";
      };

      reader.readAsDataURL(event.target.files[0]);
      debugger;
      this.item.item = event.target.files[0];
    }
  }

  //save selected image to an array and submit to the component
  isTrue = false;
  submitSelectedImage() {
    debugger;
    if (this.item == null) {
      return;
    } else {
      this.item.itemName = this.item.item.name;
      this.Items.push(this.item);
      this.ItemCount++;
      this.isTrue = true;
    }
  }

  //set active class
  setList() {
    this.griView=false;
    this.listView=true;
  }
  
  //set active class
  setGrid() {
    this.griView=true;
    this.listView=false;
  }
}
