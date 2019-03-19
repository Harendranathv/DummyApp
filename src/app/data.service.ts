import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { User } from './user-data';
import { Details } from './ProductDetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiurl = 'api/users';
  detailsUrl = 'api/details';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {

  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProductDetails(id: number): Observable<Details[]>{
    const url = `${this.detailsUrl}/${id}`;
    return this.http.get<Details[]>(url)
    .pipe(
      catchError(this.handleError)
    );
  }
}