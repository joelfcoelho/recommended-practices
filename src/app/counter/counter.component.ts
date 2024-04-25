import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NameAComponent } from '../a-component/a-component.component';
import { NameBComponent } from '../b-component/b-component.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NameAComponent, NameBComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CounterComponent {
  private counter = 1;

  get count(): number {
    return this.counter;
  }
}
