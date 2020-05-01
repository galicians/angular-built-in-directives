import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  text = true;
  option: string;

  displayText() {
    console.log('display text', !this.text)
    return this.text = !this.text
  }

  changeOption(value) {
    console.log('Change Option', value)
    this.option = value
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }
}
