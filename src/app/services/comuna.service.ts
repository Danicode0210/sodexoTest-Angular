import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {
  private url = 'http://private-anon-d717001a83-gonzalobulnes.apiary-mock.com/comunas';

  constructor(private http: HttpClient) { }

  getComunas(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
