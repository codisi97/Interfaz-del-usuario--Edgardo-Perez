import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Sidebar } from '../../../components/shared/sidebar/sidebar';

@Component({
  selector: 'app-edit',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,Sidebar],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: [''],
      correo: ['', [Validators.required, Validators.email]],
      identidad: [''],
      fechaNacimiento: ['']
    });
  }

  onSave() {
    if (this.profileForm.valid) {
      console.log('Perfil guardado', this.profileForm.value);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  get nombres() {
    return this.profileForm.get('nombres');
  }

  get apellidos() {
    return this.profileForm.get('apellidos');
  }

  get correo() {
    return this.profileForm.get('correo');
  }

}
