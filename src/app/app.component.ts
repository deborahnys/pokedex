import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      <h1>Welcome to {{ pokemons[1] }}!</h1>`
})

export class AppComponent {
  pokemons = ['Evoli', 'Salamèche', 'Dracaufeu', 'Pikachu', 'Mewto', 'Bulbizarre']
}
