import { JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectComponent } from '../select/select.component';
import { CustomSelectComponent } from '../custom-select-component/custom-select.component';

@Component({
  selector: 'app-reactive-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf, NzSelectModule, SelectComponent, CustomSelectComponent],
  templateUrl: './reactive-form-component.component.html',
  styleUrl: './reactive-form-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponentComponent {
  private formBuilder = inject(NonNullableFormBuilder);

  private typedForm = inject(FormBuilder);

  nullableForm = this.typedForm.group({ control1: '', control2: '' });
  // control1: FormControl<string | null>;

  mycontrol = new FormControl<string>('', { nonNullable: true });
  // FormControl<string>

  mycontrolchanges = toSignal(this.mycontrol.valueChanges);

  userForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: '',
    email: ['', [Validators.required, Validators.email]],
    gender: ['']
  });
  // firstName: FormControl<string>;

  // listen to changes in the entire form
  userData = toSignal(
    this.userForm.valueChanges.pipe(
      map(data => ({ name: `${data.firstName} ${data.lastName}`, email: data.email, gender: data.gender }))
      // other operators here: distinctUntilChanged(), debounceTime(), etc
    ),
    {
      initialValue: { name: '', email: '', gender: '' }
    }
  );

  // listen to changes only on firstName
  firstNameChanges = toSignal(this.userForm.controls.firstName.valueChanges);

  updateForm(gender: string) {
    this.userForm.get('gender')?.setValue(gender);
  }
}
