import { Component } from '@angular/core';

@Component({
  selector: 'dynamo-root',
  template: `
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
