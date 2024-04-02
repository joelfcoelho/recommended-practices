import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-b-component',
  standalone: true,
  imports: [],
  templateUrl: './b-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameBComponent {
  private componentBName = 'Joel'

  get name(): string {
    console.log('NameBComponent')
    return this.componentBName;
  }

  changeName() {
    this.componentBName = 'Lasha';
  }
}
