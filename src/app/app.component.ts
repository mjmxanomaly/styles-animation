import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger, showStateTrigger, listStateTrigger, animateStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  	clickedStateTrigger,
  	numberEnteredStateTrigger,
  	showStateTrigger,
  	listStateTrigger,
  	animateStateTrigger
  ]
})
export class AppComponent {
  divClicked = false;
  doAnimate = false;
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;
  isShown = false;
  width = 400;
  animate = false;
  testResults = [];

  	onClickSimple() {
  		this.clickInfo = 'clicked';
  		setTimeout(() => {
  			this.clickInfo = 'default';
  		}, 3000);
  	}

  	onAddElement() {
  		this.testResults.push(Math.random());
  	}
}
