import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation
  // ...
} from '@angular/animations';
  
  export let myAnimation = trigger('openClose', [
        // ...
        state('open', style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })),
        state('closed', style({
          height: '0px',
          opacity: 0.5,
          backgroundColor: 'green',
          visibility: 'hidden'
        })),
        transition('open => closed', [
          animate('1s')
        ]),
        transition('closed => open', [
          animate('0.5s')
        ]),
    ])