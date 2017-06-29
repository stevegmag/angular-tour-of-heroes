import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id="main-content" class="container">
      <code class="header-code">[[ --  path:: sites/sandbox/dev_mean/angular-tour-of-heroes/src/app/app.component.ts -- ]]</code>
    
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details:</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label>{{hero.name}}</div>
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `,
})
export class AppComponent  {   
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  title = 'Tour of Heroes';
}

export class Hero {
  id: number;
  name: string;
}