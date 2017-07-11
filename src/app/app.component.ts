import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './services/app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.sass' ],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
