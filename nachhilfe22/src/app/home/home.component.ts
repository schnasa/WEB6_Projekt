import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-home',
  template: `
    <div class="ui main container">
      <h1>Nachhilfe für ALLE!</h1>
      <p>Such das richtige Angebot für dich! Wir bieten verschiedene Nachhilfeangebote für unterschiedliche Levels.
        Von Volksschule über neue Mittelschule und Oberstufe, bishin zur Matura, Bachelore, Master und Doktorat.</p>
      <a routerLink="../lvas" class="ui red button">
        Alle Angebote ansehen
      </a>
    </div>
  `,
  styles: []
})
export class HomeComponent { }
