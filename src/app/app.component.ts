import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  	clickedStateTrigger,
  	numberEnteredStateTrigger
  ]
})
export class AppComponent {
  divClicked = false;
  doAnimate = false;
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;

  	onClickSimple() {
  		this.clickInfo = 'clicked';
  		setTimeout(() => {
  			this.clickInfo = 'default';
  		}, 3000);
  	}
}
