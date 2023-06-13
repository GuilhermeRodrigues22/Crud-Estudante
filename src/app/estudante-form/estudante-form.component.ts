import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrls: ['./estudante-form.component.css'],
})
export class EstudanteFormComponent implements OnInit {
  formGroupEstudante: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private EstudanteService: EstudanteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroupEstudante = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      telefone: [''],
      idade: [''],
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getEstudanteById(id);
  }

  getEstudanteById(id: number) {
    this.EstudanteService.getEstudante(id).subscribe({
      next: (data) => {
        this.formGroupEstudante.setValue(data);
        this.isEditing = true;
      },
    });
  }

  salvar() {
    if (this.formGroupEstudante.valid) {
      if (this.isEditing) {
        this.EstudanteService.update(this.formGroupEstudante.value).subscribe({
          next: () => {
            this.router.navigate(['/estudantes']);
          },
        });
      } else {
        this.EstudanteService.save(this.formGroupEstudante.value).subscribe({
          next: () => {
            this.router.navigate(['/estudantes']);
          },
        });
      }
    }
  }

  formReset() {
    this.formGroupEstudante.reset();
  }

  cancelar() {
    this.router.navigate(['/estudantes']);
  }
}
