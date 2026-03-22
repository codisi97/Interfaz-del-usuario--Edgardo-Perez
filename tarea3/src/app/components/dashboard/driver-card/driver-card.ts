import { Component,Input } from '@angular/core';
import { Drivers } from '../../../pages/drivers/drivers';

@Component({
  selector: 'app-driver-card',
  standalone:true,
  imports: [],
  templateUrl: './driver-card.html',
  styleUrl: './driver-card.css',
})
export class DriverCard {
  @Input() driver!: Drivers;

}
