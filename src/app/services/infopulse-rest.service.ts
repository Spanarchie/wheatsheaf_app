import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const apiUrl = "http://api.zippopotam.us/";
const apiUrl1 = "http://192.0.0.1:5005/campaign/ind/Engineering";

@Injectable({
  providedIn: 'root'
})
export class InfopulseRestService {
    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    getData(): Observable<any> {
        let response1 = this.http.get(apiUrl+'US/00210');
        let response2= this.http.get(apiUrl+'IN/110001');
        let response3 = this.http.get(apiUrl+'BR/01000-000');
        let response4 = this.http.get(apiUrl+'FR/01000');
        let response5 = this.http.get(apiUrl1);
        console.log("response5 = "+response5[0]);
        return forkJoin([response1, response2, response3, response4]);
    }
}
