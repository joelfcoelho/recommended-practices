import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponentComponent } from './reactive-form-component.component';

describe('ReactiveFormComponentComponent', () => {
  let component: ReactiveFormComponentComponent;
  let fixture: ComponentFixture<ReactiveFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
