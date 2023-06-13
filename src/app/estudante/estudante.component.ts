import { EstudanteService } from './../estudante.service';
import { Estudante } from './../estudante';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css'],
})
export class EstudanteComponent implements OnInit {
  estudante: Estudante[] = [];
  estudantes: Estudante = {} as Estudante;
  isEditing: boolean = false;

  constructor(
    private estudanteservice: EstudanteService,
  ) {

  }

  ngOnInit(): void {
    this.loadEstudantes();
  }

  loadEstudantes() {
    this.estudanteservice.getEstudantes().subscribe({
      next: (data) => (this.estudante = data),
    });
  }

  onCleanEvent() {
    this.isEditing = false;
  }

  onSaveEvent(estudante: Estudante) {
    if (this.isEditing) {
      this.estudanteservice.update(estudante).subscribe({
        next: () => {
          this.loadEstudantes();
          this.isEditing = true;
        }
      });
    }
    else {
      this.estudanteservice.save(estudante).subscribe({
        next: data => {
          this.estudante.push(data)
        }
       });
    }
  }

  clean(){
    this.isEditing = false;
  }

  editar(estudante: Estudante) {
    this.estudantes = estudante;
    this.isEditing = true;
  }

  deletar(estudante: Estudante) {
    this.estudanteservice.delete(estudante).subscribe({
      next: () => this.loadEstudantes(),
    });
  }
}
