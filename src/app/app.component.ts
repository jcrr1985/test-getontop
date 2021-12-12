import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  current_client = 'J Rodriguez'
  current_title = `Contracts for ${this.current_client}`;
  enabled_title = true;
}
