import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) { }

  login() {
    // Here you would implement the logic to send login request to backend
    // For demo purposes, let's assume successful login redirects to home page
    this.router.navigate(['/home']);
  }
}
