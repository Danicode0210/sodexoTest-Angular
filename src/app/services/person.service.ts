import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) { }

  guardarPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.baseUrl}/save`, persona);
  }

  cargarRegistros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }
}
