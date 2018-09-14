import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {
  private serviceUrl: string;
  private resourceUrl: string;
  constructor() {
    //TODO Should changed the service url based on environment
    this.serviceUrl = "";
  }
  SubmitPost(module: string, userId: string): any{
    // this.resourceUrl = this.serviceUrl.concat("?module=" ).concat(module).concat("&userId=").concat(userId);
    // return this.http.getAll(this.resourceUrl);
    return true;
  }
}
