import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drivers } from '../drivers/drivers';

@Component({
  selector: 'app-drivers-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drivers-cards.html',
  styleUrl: './drivers-cards.css',
})
export class DriversCards {
  drivers: Drivers[] = [
    {
      name: 'Michael Nguyen',
      carModel: 'Pontiac - White - 586 5GX',
      plate: '586 5GX',
      phone: '0903001276',
      location: 'Saigon',
      rating: 4.5,
      totalReviews: 2256,
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      status: 'Disponible'
    },
    {
      name: 'Loki Bright',
      carModel: 'Pontiac - White - 586 5GX',
      plate: '586 5GX',
      phone: '0903001276',
      location: 'Saigon',
      rating: 4.5,
      totalReviews: 2256,
      avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      status: 'Disponible'
    },
    {
      name: 'Dominique Ch.',
      carModel: 'Pontiac - White - 586 5GX',
      plate: '586 5GX',
      phone: '0903001276',
      location: 'Saigon',
      rating: 4.5,
      totalReviews: 2256,
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      status: 'Disponible'
    }
  ];

  trackByName(index: number, driver: Drivers): string {
    return driver.name;
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}