import { Component, signal } from '@angular/core';
import { Produtos } from './components/produtos/produtos'; 
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Produtos, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crud-produtos-angular');
}
