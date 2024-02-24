import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string;
  email: string;
  password: string;

  constructor(private http: HttpClient) { }

  registerUser() {
    const userData = { username: this.username, email: this.email, password: this.password };
    this.http.post('/api/register', userData).subscribe(response => {
      console.log('User registered successfully:', response);
      // Redirect or show a success message
    }, error => {
      console.error('Error registering user:', error);
      // Show an error message to the user
    });
  }
}
