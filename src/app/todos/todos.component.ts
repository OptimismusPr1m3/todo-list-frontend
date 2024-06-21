import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos: any = [];
  error = ''

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    try {
      this.todos = await this.loadTodos();
      console.log(this.todos);
    } catch(e) {
      this.error = 'Fehler beim Laden';
      console.error(e);
    }
  }

  loadTodos() {
    const url = environment.baseURL + '/todos/';
    console.log('TodosComponent: Loading todos from', url);
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', 'Token ' + localStorage.getItem('token')) // Leerzeichen beim Token wichtig wichtig !!!!!!
    return lastValueFrom(this.http.get(url));
  }
}
