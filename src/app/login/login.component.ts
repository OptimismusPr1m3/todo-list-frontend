import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router){}

  async login() {
    try {
      let response: any = await this.auth.loginWithNameAndPassword(this.username, this.password)
      console.log(response)
      localStorage.setItem('token', response['token']);
      this.router.navigateByUrl('/todos')
    } catch (e) {
      console.error(e);
    }
  }
}
