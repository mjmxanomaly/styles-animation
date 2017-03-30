import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  	trigger('clickedState', [
  		state('default', style({
  			backgroundColor: 'orange',
  			width: '100px',
  			height: '100px'
  		})),
  		state('clicked', style({
  			backgroundColor: 'blue',
  			width: '300px',
  			height: '50px'
  		})),
  		state('mousedown', style({
  			backgroundColor: 'red',
  			width: '100px',
  			height: '100px'
  		})),
  		transition('default <=> clicked', animate('1s 500ms ease-in')),
  		transition('mousedown <=> clicked', animate(300)),
  		transition('mousedown <=> default', animate(300))
  	]),
  	trigger('numberEnteredState', [
  		state('unselected', style({
  			border: '1px solid black',
  			padding: '5px',
  			backgroundColor: 'white'
  		})),
  		state('selected', style({
  			border: '2px solid blue',
  			padding: '4px',
  			backgroundColor: 'lightblue'
  		})),
  		transition('unselected => selected', [
  			style({
  				border: '2px solid black',
  				padding: '4px',
  				transform: 'scale(1)'
  			}),
  			animate('600ms 100ms ease-out', style({
  				backgroundColor: 'red',
  				transform: 'scale(1.05)'
  			})),
  			animate(2000)	
  		])
  	])
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
