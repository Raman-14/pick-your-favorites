import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  url = "https://cataas.com/cat/says/hello%20world"

  constructor(
    private http:HttpClient
  ) { }
  // apiCall()
  // {
  //   return this.http.get(this.url);
  // }
}
