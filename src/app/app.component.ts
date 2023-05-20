import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pick-your-favorite';
  imageCATData: any;
  imageDOGData: any;
  selectedImage: any;
  selecetdPercentage: number = Math.round(Math.random() * 100);

  // Initialize
  constructor(private http: HttpClient) {
    this.fetchCATImage();
    this.fetchDOGImage();
  }

  fetchCATImage() {
    this.http.get('https://cataas.com/cat?json=true').subscribe((data: any) => {
      this.imageCATData = 'https://cataas.com/' + data.url;
    });
  }
  fetchDOGImage() {
    this.http
      .get('https://dog.ceo/api/breeds/image/random')
      .subscribe((data: any) => {
        this.imageDOGData = data.message;
      });
  }

  cat() {
    this.selecetdPercentage = Math.round(Math.random() * 100);
    console.log(this.selecetdPercentage);
    this.selectedImage = this.imageCATData;
    this.refresh();
    this.spinner='visual';
  }
  dog() {
    this.selecetdPercentage = Math.round(Math.random() * 100);
    console.log(this.selecetdPercentage);
    this.selectedImage = this.imageDOGData;
    this.refresh();
    this.spinner='visual';
  }
  refresh() {
    setTimeout(() => {
      this.fetchCATImage();
      this.fetchDOGImage();
      this.selectedImage = '';
      this.spinner='hidden';
    }, 3000);
  }
  spinner='hidden';

}
