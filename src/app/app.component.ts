import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title='AngularProject';
}

//Encapsulation

// import { Component, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>Encapsulation</h1>
//     <h2>None Encapsulation</h2>
//     <app-none></app-none>
//     <h2>Emulated Encapsulation</h2>
//     <app-emulated></app-emulated>
//     <h2>Shadow Dom Encapsulation</h2>
//     <app-shadow></app-shadow>`,
//   styles: [
//     `app-none, app-emulated, app-shadow {
//       display: block; max-width: 500px; padding: 5px; margin: 5px 0;
//     }`,
//     'app-none { border: solid 3px red; }',
//     'app-emulated { border: solid 5px green; }',
//     'app-shadow { border: solid 5px blue; }',
//   ],
//   encapsulation: ViewEncapsulation.None,
// })
// export class AppComponent {
//   title='AngularProject';
// }


