import { Component } from '@angular/core';
import { CounterCard } from '../../components/shared/counter-card/counter-card';
import { StatusBadge } from '../../components/shared/status-badge/status-badge';

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
  standalone: true, 
  imports: [CounterCard, StatusBadge],
  templateUrl: './drivers.html',
  styleUrl: './drivers.css',
})
export class DriversComponent {

  drivers: Drivers[] = [
    {
      name: 'Chris Friedly',
      carModel: 'Pontiac - White - 586 5GX',
      plate: '586 5GX',
      phone: '0903001276',
      location: 'Saigon',
      rating: 4.5,
      totalReviews: 2256,
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      status: 'Activo'
    },
    {
      name: 'Gad Harry',
      carModel: 'Pontiac - White - 586 5GX',
      plate: '586 5GX',
      phone: '0903001276',
      location: 'Saigon',
      rating: 4.5,
      totalReviews: 2256,
      avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      status: 'Activo'
    },
    {
      name: 'Jenna Sullivan',
      carModel: 'Pontiac - White - 586 5GX',
      plate: '586 5GX',
      phone: '0903001276',
      location: 'Saigon',
      rating: 4.5,
      totalReviews: 2256,
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      status: 'Inactivo'
    }
  ];

  totalDrivers: number = this.drivers.length; 
}