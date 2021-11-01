import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  constructor(private http: HttpClient) { }

  get password() {
    return this.signup.get('password');
  }
  get confirmPassword() {
    return this.signup.get('confirmPassword');
  }
  get email() {
    return this.signup.get('email');
  }

  public signup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      this.hesRegularLetter(),
      this.hesCapitalLetter(),
      this.hesNumber(),
      this.lengthGreaterThan6(),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.confirmPasswordValidator(),
    ]),
    email: new FormControl('', [
      Validators.required,
      this.isValidEmail()
    ]
    ),
  });

  onSubmit() {

    const email = this.signup.get('email').value;
    const password = this.signup.get('password').value;

    const reqData = {
      'user': email,
      'password': password
    };

    this.http.post('http://localhost:9090/addUser', reqData).subscribe(
      (response) => {
        console.log(response);
        // this.signup.reset();

      },
      (error) => console.log(error)
    )
  }

  hesRegularLetter(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      return /[a-z]/.test(control.value) ? null : { missingRegularLetter: true };
    };
  }


  isValidEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) ? null : { incorrectEmailFormat: true };
    };
  }

  hesCapitalLetter(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      return /[A-Z]/.test(control.value) ? null : { missingCapitalLetter: true };
    };
  }

  hesNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      return /[0-9]/.test(control.value) ? null : { missingNumber: true };
    };
  }

  lengthGreaterThan6(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      return control.value.length > 6 ? null : { lengthShorterThan6: true };
    };
  }

  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      console.log('confirmPasswordValidator');
      console.log(control.value == this.confirmPassword.value);
      return control.value === this.confirmPassword.value
        ? null
        : { passwordsArentMatched: true };
    };
  }
}
