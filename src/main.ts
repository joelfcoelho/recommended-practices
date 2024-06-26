import { Component, importProvidersFrom, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ImageComponentComponent } from './app/image-component/image-component.component';
import { BasicSearchComponent } from './app/basic-search/basic-search.component';
import { TodoListComponent } from './app/todo-list/todo-list.component';
import { CounterComponent } from './app/counter/counter.component';
import { CustomSelectComponent } from './app/custom-select-component/custom-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponentComponent } from './app/reactive-form-component/reactive-form-component.component';

export type TodoItem = { title: string };

const TODO_LIST: TodoItem[] = [
  { title: 'Complete assignment' },
  { title: 'Read a book' },
  { title: 'Go for a run' },
  { title: 'Buy groceries' },
  { title: 'Call a friend' },
  { title: 'Attend a meeting' },
  { title: 'Clean the house' },
  { title: 'Watch a movie' },
  { title: 'Learn a new skill' },
  { title: 'Cook dinner' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-counter></app-counter>

    <br>

    <app-basic-search (newSearchTerm)="searchText.set($event)" />

    <br />

    <app-todo-list [todos]="todos" [filterText]="searchText()" />

    <app-image-component [image]="'https://app-staging.cognism.com/api/logotix/deloitte.com'" />

    <br />
    <!--    <app-custom-select />-->
    <app-reactive-form-component></app-reactive-form-component>
  `,
  imports: [
    ImageComponentComponent,
    BasicSearchComponent,
    TodoListComponent,
    CounterComponent,
    CustomSelectComponent,
    ReactiveFormComponentComponent
  ]
})
export class AppComponent {
  name = 'Angular';

  readonly todos = TODO_LIST;

  searchText = signal('');
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom([BrowserAnimationsModule])]
}).then();
