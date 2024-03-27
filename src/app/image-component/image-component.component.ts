import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-component',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-component.component.html',
  styleUrl: './image-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponentComponent {
  image = input.required<string>();

  width = input<number>(50);
  height = input<number>(50);

  imageWithSize = computed(
    () => `${this.image()}?width=${this.width()}&height=${this.height()}`
  );
}
