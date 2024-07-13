import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // this.authService.login(this.loginForm.value).subscribe(
      //   response => {
      //     localStorage.setItem('token', response.token);
      //     this.router.navigate(['/dashboard']);
      //   },
      //   error => {
      //     console.error(error);
      //   }
      // );

      this.authService.login(this.loginForm.value).pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError(error);
        })
      )
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }
      );
    }
  }
}
