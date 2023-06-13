import { Estudante } from './../estudante';
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

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrls: ['./estudante-form.component.css'],
})
export class FormEstudanteComponent implements OnChanges {
  @Input()
  estudante: Estudante = {} as Estudante;

  @Output()
  saveEvent = new EventEmitter<Estudante>();

  @Output()
  cleanEvent = new EventEmitter<void>();

  formGroupEstudante: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private EstudanteService: EstudanteService
  ) {
    this.formGroupEstudante = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      telefone: [''],
      idade: [''],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupEstudante.setValue(this.estudante);
  }

  salvar() {
    if (this.formGroupEstudante.valid) {
      this.saveEvent.emit(this.formGroupEstudante.value);
      this.formGroupEstudante.reset();
    }
  }

  cancelar() {
    this.cleanEvent.emit();
    this.formGroupEstudante.reset();
  }
}
