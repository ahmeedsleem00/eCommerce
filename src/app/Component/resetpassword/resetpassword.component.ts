import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loading: boolean = false;
  errorMessage: string = '';
  resetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9@#$%&*]{3,16}$/),
    ]),
  });

  searchInput: FormControl = new FormControl(null, []);

  submitReset(formData: FormGroup) {
    this.loading = true;
    this._AuthService.resetPassword(formData.value).subscribe({
      next: (data) => {
        if (data.token) {
          this._Router.navigate(['/login']);
        }
        console.log(data);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
    // console.log(formData);
  }
}
