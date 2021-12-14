import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}
  private current_client = 'J Rodriguez';
  public current_title = `Contracts for ${this.current_client}`;
  public enabled_title = true;
  public isMobile!: boolean;

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
          console.log(this.isMobile);
        } else {
          this.isMobile = false;
          console.log(this.isMobile);
        }
      });
  }
}
