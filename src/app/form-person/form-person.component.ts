import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunaService } from '../services/comuna.service';
import { PersonService } from '../services/person.service';
import { Comuna } from '../models/comuna.model';
import { Persona } from '../models/persona.model';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({});
  public comunas: Comuna[] = [];
  public registros: any[] = [];

  constructor(
    private fb: FormBuilder,
    private comunaService: ComunaService,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.obtenerComunas();
   
  }

  createForm() {
    this.myForm = this.fb.group({
     name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+57[0-9]{10}$/)]],
      comuna: ['', [Validators.required]]
    });
  }

 
  
  obtenerComunas() {
    this.comunaService.getComunas().subscribe(data => {
      this.comunas = data;
      this.comunas.map(c => c.comuna.name)
    });
  }
  

  guardarPersona() {
    if (this.myForm.valid) {
      const persona: Persona = this.myForm.value;
      console.log(persona)
      this.personService.guardarPersona(persona).subscribe(() => {
        alert('Persona guardada correctamente');
        this.cargarRegistros();
        this.myForm.reset();
      });
    }
  }

  cargarRegistros() {
    this.personService.cargarRegistros().subscribe({
      next: (data: any[]) => {
        this.registros = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
    
  }
  
}
