import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    if (this.authService.user) {
      this.snackBar.open('Already logged In, redirecting to Home...', null, { duration: 3000});
      this.router.navigate(['/candidates']);
    }
  }

  login(payload: {userName: string, password: string}, valid: boolean): void {
    if (valid) {
      this.authService.login(payload)
      .pipe(
        // catchError(error => this.loginForm.)
      )
      .subscribe(() => this.router.navigate(['/candidates']));
    }
  }

}
