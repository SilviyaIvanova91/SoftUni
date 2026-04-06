import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CrewMember } from '../../interfaces/crew-member.interface';

@Component({
  selector: 'app-crew-register',
  imports: [FormsModule],
  templateUrl: './crew-register.html',
  styleUrl: './crew-register.css',
})
export class CrewRegisterComponent {
  @ViewChild('crewForm') form!: NgForm;

  crewMember: CrewMember = {
    name: '',
    role: '',
    experience: 0,
    email: '',
  };

  roles: string[] = ['Commander', 'Pilot', 'Engineer', 'Scientist', 'Medical Officer'];
  registeredCrew: CrewMember[] = [];

  onSubmit(): void {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((key) => {
        this.form.controls[key].markAsTouched();
      });
      return;
    }

    this.registeredCrew.push({ ...this.crewMember });
    this.form.reset();

    this.crewMember = {
      name: '',
      role: '',
      experience: 0,
      email: '',
    };
  }
}
