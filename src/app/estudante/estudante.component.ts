import { EstudanteService } from './../estudante.service';
import { Estudante } from './../estudante';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css'],
})
export class EstudanteComponent implements OnInit {
  estudante: Estudante[] = [];
  isEditing: boolean = false;

  constructor(
    private estudanteservice: EstudanteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEstudantes();
  }

  loadEstudantes() {
    this.estudanteservice.getEstudantes().subscribe({
      next: (data) => (this.estudante = data),
    });
  }

  create() {
    this.router.navigate(['createEstudante']);
  }
  editar(estudante: Estudante) {
    this.router.navigate(['estudanteDetails', estudante.id]);
  }
  deletar(estudante: Estudante) {
    this.estudanteservice.delete(estudante).subscribe({
      next: () => this.loadEstudantes(),
    });
  }
}
