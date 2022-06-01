import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-home',
  template: `
    <div>
      <h1>Home</h1>
      <p>Such das richtige Angebot für dich!</p>
      <a routerLink="../lvas" class="ui red button">
        Alle Angebote ansehen
      </a>
    </div>
  `,
  styles: []
})
export class HomeComponent { }
