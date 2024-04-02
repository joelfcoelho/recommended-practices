import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-a-component',
  standalone: true,
  imports: [],
  templateUrl: './a-component.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NameAComponent {
  private componentAName = 'Lasha';

  get name(): string {
    console.log('NameAComponent')
    return this.componentAName;
  }

  changeName(): void {
    this.componentAName = 'Joel';
  }
}
