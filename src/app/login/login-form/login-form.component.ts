import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../shared/services/auth/auth.service';
import { ApiService } from './../../shared/services/api/api.service';
import { RedirectService } from './../../shared/services/redirect/redirect.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public responseError: boolean = false;
  public message: string = "Preencha todos os campos!";

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private redirectService: RedirectService
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() { }

  public async onSubmit() {
    this.submitted = true;

    if (this.loading === false && this.loginForm.valid) {
      this.loading = true;

      try {
        const formData = this.loginForm.value;
        const document = this.clearDocumentMask(formData.login);
        const password = formData.password;

        await this.tryLoginOnServer(document, password);

        this.redirectToLastFunnelStep();
      } catch (error) {
        this.authService.clearSessionId();
        this.message = error.message;
        this.responseError = true;
      }

      this.submitted = false;
      this.loading = false;
    }
  }

  public validField(fieldName: string) {
    return !this.submitted ? true : this.loginForm.controls[fieldName].valid;
  }

  private clearDocumentMask(document: string) {
    return document.replace(/([.-])/g, '');
  }

  private async tryLoginOnServer(document: string, password: string) {
    try {
      return await this.apiService.login(document, password).toPromise();
    } catch (error) {
      throw new Error("Usuário ou senha inválidos!");
    }
  }

  private async redirectToLastFunnelStep() {
    this.redirectService.redirectNotCleaningQueryParams('/login/redirect');
  }
}
