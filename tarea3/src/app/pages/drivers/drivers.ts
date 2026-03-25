import { Component } from '@angular/core';
import { Sidebar } from '../../components/shared/sidebar/sidebar';
import { CommonModule } from '@angular/common';

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
  imports: [Sidebar,CommonModule],
  templateUrl: './drivers.html',
  styleUrl: './drivers.css',
})
export class DriversComponent {

}
