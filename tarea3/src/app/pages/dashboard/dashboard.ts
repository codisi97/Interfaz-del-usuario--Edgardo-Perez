import { Component } from '@angular/core';
import { StatCard } from '../../components/dashboard/stat-card/stat-card';
import { DriverCard } from '../../components/dashboard/driver-card/driver-card';
import { Drivers } from '../drivers/drivers';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [StatCard, DriverCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
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

}
