import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TodoItem } from '../../main';

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

  filteredTodos = computed(() =>
    this.todos().filter(todo => todo.title.toLowerCase().includes(this.filterText().toLowerCase()))
  );
}
