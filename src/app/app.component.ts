import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-scss-pro';

  text: String = 'CAPS';

  value: number = 23;

  check: boolean = false;

  constructor() {
    this.check = true;
    this.text = 'Hint';
  }

  clicked() {
    console.log('YES');
    alert('YES');
  }
}
