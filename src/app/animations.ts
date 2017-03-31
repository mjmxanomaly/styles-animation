import { trigger, state, style, group, keyframes, transition, animate } from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
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
    border: '1px solid black',
    width: '100px',
    height: '100px'
  })),
  transition('default => clicked', animate('1s 500ms ease-in')),
  // transition('clicked => default', animate('300ms ease-out'))
  transition('clicked => default', animate(300)),
  transition('mousedown <=> clicked', animate(300)),
  // transition('clicked => mousedown', animate(300))
]);

export const numberEnteredStateTrigger = trigger('numberEnteredState', [
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
      padding: '4px'
    }),
    animate('600ms 100ms ease-out', style({
      backgroundColor: 'red',
      transform: 'scale(1.05)'
    })),
    animate(300)
  ])
]);

export const showStateTrigger = trigger('showState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(1000, style({
  //     opacity: 1
  //   }))
  // ]),
  // transition('* => void', animate(300, style({
  //   opacity: 0
  // })))

  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1000, style({
      opacity: 1
    }))
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

export const listStateTrigger = trigger('listState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(1000, style({
        opacity: 0.7
      })),
      animate('2000ms ease-out', keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        })
      ]))
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate('4000ms cubic-bezier(.16,.78,0,.92)', style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);
