import { Component } from '@angular/core';
import {JokesService} from './services/jokes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dad-jokes';
  joke: string ='';

  constructor(private jokeService: JokesService) {
  }
  fetchJoke(): void {
    this.jokeService.getJoke().subscribe((data:any) => {
      this.joke = data.joke;
    });
  }
}
