import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { switchMap, catchError } from "rxjs/operators";
import { of, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  apiUrl = "http://localhost:5000/";
  //apiUrl = "https://ad-management.herokuapp.com/";
  constructor(private http: HttpClient) {}

  getAllAds() {
    return this.http.get(`${this.apiUrl}getAllAds`);
  }
  addNewAd(ad: any) {
    return this.http.post(`${this.apiUrl}addNewAd`, ad).pipe(
      switchMap((savedAd: any) => {
        //alert("User created successfully");
        return of(savedAd);
      }),
      catchError((ex: any) => {
        console.log(`server error occured`, ex);
        return throwError(`AD Creation failed, please contact to admin`);
      })
    );
  }
  recordClicks(id: any) {
    return this.http.get(`${this.apiUrl}recordClicks?id=${id}`);
  }
}
