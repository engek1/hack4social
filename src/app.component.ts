import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class App {
 
}
