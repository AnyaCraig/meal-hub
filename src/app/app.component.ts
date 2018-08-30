import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meal-hub';
  currentView: string = "recipes";

  onNavigationFired(desiredView) {

    console.log("NAVIGATION request receive by app. Desired view = ", desiredView);
    this.currentView = desiredView;
  }
}
