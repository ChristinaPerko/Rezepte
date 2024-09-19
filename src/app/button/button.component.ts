import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button';

  @Input() color: string = '#000';

  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();

 

  onClick(): void {

    this.btnClick.emit();

  }

}
