import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  standalone:true,
  imports: [],
  templateUrl: './counter-card.html',
  styleUrl: './counter-card.css',
})
export class CounterCard {
  @Input() title: string = '';
  @Input() total: number = 0;
  @Input() icon: string = '';
  

}
