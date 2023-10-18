import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  errorMessage: string = '';

  constructor(private _auth: AuthService, private _Router: Router) {}

  ForgetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  ForgetPasswordSubmit(Form: FormGroup) {
    this._auth.ForgotPassword(Form.value).subscribe({
      next: (data) => {
        console.log(data);
        if (data.statusMsg == 'success') {
          $('.resetcode').fadeIn(1000);
          $('.forgetpassword').fadeOut(1000);
          document.querySelector('.resetcode')?.classList.remove('d-none');
          document.querySelector('.forgetpassword')?.classList.add('d-none');
        }
      },
      complete: () => {},
      error: (err) => {
        console.log(err.error);
      },
    });
    console.log(Form.value);
  }

  ResetCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
  });

  resetCodesbumit(Form: FormGroup) {
    console.log(Form.value);
    this._auth.verifyResetCode(Form.value).subscribe({
      next: (data) => {
        console.log(data);

        if (data.status == 'Success') {
          this._Router.navigate(['/resetpassword']);
        }
      },
      complete: () => {},
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
      },
    });
  }
}
