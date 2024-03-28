import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ImageComponentComponent } from './app/image-component/image-component.component';
import { BasicSearchComponent } from './app/basic-search/basic-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-image-component [image]="'https://app-staging.cognism.com/api/logotix/deloitte.com'" />

    <br />

    <app-basic-search (newSearchTerm)="searchText.set($event)" />
    <br />
    {{ searchText() }}
  `,
  imports: [ImageComponentComponent, BasicSearchComponent]
})
export class App {
  name = 'Angular';

  searchText = signal('');
}

bootstrapApplication(App);
