import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TodoItem } from '../../main';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  todos = input.required<TodoItem[]>();
  filterText = input('');

  debouncedFilter = toSignal(
    toObservable(this.filterText).pipe(
      debounceTime(300),
      distinctUntilChanged()
      /** perform any other operations here */
    ),
    {
      initialValue: ''
    }
  );

  filteredTodos = computed(() =>
    this.todos().filter(todo => todo.title.toLowerCase().includes(this.debouncedFilter().toLowerCase()))
  );
}
