import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-basic-search',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './basic-search.component.html',
  styleUrl: './basic-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSearchComponent {
  searchTerm = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  onSignatureNameChange = toSignal(this.searchTerm.valueChanges.pipe(tap(output => this.newSearchTerm.emit(output))));

  @Output() newSearchTerm = new EventEmitter<string>();
}
