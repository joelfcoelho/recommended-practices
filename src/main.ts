import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ImageComponentComponent } from './app/image-component/image-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageComponentComponent],
  template: `
    <div>
      <app-image-component [image]="'https://app-staging.cognism.com/api/logotix/deloitte.com'"/>

      <app-image-component [image]="'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FXrAAAOSw-bVl6RrK%2Fs-l140.jpg&f=1&nofb=1&ipt=a4adb3a0ad7f61852d43fc4b27402973f2c0788ea93bc4563886714c0ceec5d2&ipo=images'"/>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
