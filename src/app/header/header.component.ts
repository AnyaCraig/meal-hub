import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() fireNavigation = new EventEmitter<string>();

  navigate(desiredComponent) {
    this.fireNavigation.emit(desiredComponent);
  }
}
