import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loading: boolean = false;
  errorMessage: string = '';
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9@#$%&*]{3,16}$/),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9@#$%&*]{3,16}$/),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[1250][0-9]{8}$/),
      ]),
    },
    { validators: this.repasswordMatch }
  );

  repasswordMatch(form: AbstractControl) {
    let password = form.get('password')?.value;
    let rePassword = form.get('rePassword')?.value;

    if (password === rePassword) {
      return null;
    } else {
      return { reapassword: 'rePassword does not match Password' };
    }
  }

  searchInput: FormControl = new FormControl(null, []);

  sumbitRegister(formData: FormGroup) {
    this.loading = true;
    this._AuthService.register(formData.value).subscribe({
      next: (data) => {
        console.log(data);
        if (data.message == 'success') {
          this._Router.navigate(['/login']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
    console.log(formData);
  }
}
