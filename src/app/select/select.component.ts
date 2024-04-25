import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NzSelectModule, CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  options$: Observable<Option[]> = of([]);
  value = '';

  ngOnInit(): void {
    this.options$ = timer(1000).pipe(
      map(() => [
        { label: 'Option 1', value: 'value1' },
        { label: 'Option 2', value: 'value2' },
        { label: 'Option 3', value: 'value3' }
      ])
    );
  }

  emitData(gender: string): void {
    this.selectionChange.emit(gender);
    this.value = gender;
  }
}
