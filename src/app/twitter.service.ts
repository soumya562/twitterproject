import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Data } from './data';
@Injectable({
  providedIn: 'root'
})
export class TwitterService {
   
    api_key : string ="shA5FIRHLa3CGSnpok7e3NLBL";
    api_secret_key : string ="W438l2Oe7ntRN5wJanvFe3hntNrTXQrOSFfyeuDmiG4Z7FvNYg";
    bearer_token : string = "";

  constructor(private http : HttpClient) { }

    getTwitter() : Observable<any>{
      var header =`${this.api_key}:${this.api_secret_key}`; 
      var encoder = btoa(header); //converting to base64 encode
      var finalHeader = `Basic ${encoder}`;
      // console.log(finalHeader);
      return this.http.post('/api.twitter.com/oauth2/token',{'grant_type':'client_credentials'},{
        headers : new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization' : finalHeader,
          // 'Content-Length': '29',
          // 'Accept-Encoding': 'gzip'
        })
        
      });

      // return this.http.post('https://api.twitter.com/2/tweets/search/stream/rules',
      // {
      //   "add": [
      //     {"value": "NewYork has:images", "tag": "NewYork with images"}
      //   ]
      // },  {
      //   headers : new HttpHeaders({
      //     'Content-Type':  'application/json',
      //     'Authorization' :  this.api_key
      //   })

      // });
      

    }

}

