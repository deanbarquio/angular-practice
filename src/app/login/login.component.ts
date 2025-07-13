import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Please enter email and password.');
      return;
    }

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Fake login: save to localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Redirect to dashboard
    this.router.navigate(['/dashboard']);
  }
}
