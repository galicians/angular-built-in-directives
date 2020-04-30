import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  text = true;

  displayText() {
    console.log('display text', !this.text)
    return this.text = !this.text
  }
}
