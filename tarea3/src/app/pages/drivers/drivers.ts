import { Component } from '@angular/core';

export interface Drivers {
  name: string;
  carModel: string;
  plate: string;
  phone: string;
  location: string;
  rating: number;
  totalReviews: number;
  avatarUrl: string;
  status: string;
}

@Component({
  selector: 'app-drivers',
  imports: [],
  templateUrl: './drivers.html',
  styleUrl: './drivers.css',
})
export class DriversComponent {

}
