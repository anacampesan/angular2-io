import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean = true;

  onNotifyClicked(toggle: boolean) {
    this.toggle = toggle;
  }

}
