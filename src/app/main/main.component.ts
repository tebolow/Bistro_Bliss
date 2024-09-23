import { Component } from '@angular/core';
import { HealthyFoodComponent } from '../healthy-food/healthy-food.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HealthyFoodComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
