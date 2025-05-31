import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('I, I see the weight of hollow death residing in you');

  keyUpHandler(event: KeyboardEvent): void {  
    console.log(`user pressed key: ${event.key}`);    
  }
}
