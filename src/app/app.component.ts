import { Component } from '@angular/core';

@Component({
  selector: 'dynamo-root',
  template: `
    <nav class="navbar navbar-light bg-light mb-3">
      <div class="container">
        <h1 class="navbar-brand mb-0" href="#">
          <img src="assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
          Helicopter Search Engine
        </h1>
      </div>
    </nav>
    
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
