import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  requestCount = 0;
  constructor(private service: NgxSpinnerService) {}
  loading() {
    this.service.show(undefined, {
      bdColor: 'rgba(0,0,0,0.8)',
      size: 'large',
      color: '#fff',
      type: 'square-jelly-box',
      fullScreen: true,
    });
  }

  hideLoader() {
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.service.hide();
    }
  }
}
