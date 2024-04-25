import { ChangeDetectionStrategy, Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';

interface Option {
  label: string;
  value: string;
}

const CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomSelectComponent),
  multi: true
};

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule, NzSelectModule, FormsModule],
  providers: [CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR],
  templateUrl: './custom-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit {
  private _innerValue: never | undefined;

  private onChangeFn: (value: never) => void = () => {};
  private onTouchedFn: (value: never) => void = () => {};

  options$: Observable<Option[]> = of([]);

  get innerValue(): undefined {
    return this._innerValue;
  }

  set innerValue(value: never) {
    this._innerValue = value;
    this.onChangeFn(value);
  }

  ngOnInit(): void {
    this.options$ = timer(1000).pipe(
      map(() => [
        { label: 'Option 1', value: 'value1' },
        { label: 'Option 2', value: 'value2' },
        { label: 'Option 3', value: 'value3' }
      ])
    );
  }

  writeValue(value: never): void {
    this._innerValue = value;
  }

  registerOnChange(fn: never): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: never): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabling state if needed
  }
}
