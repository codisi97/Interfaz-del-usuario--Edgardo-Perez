import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-grid',
  standalone:true,
  imports: [CommonModule,ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  productos: Product[] = [
    {
      nombre: 'CARMICIDE GOTAS',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QJmNnkn--F5VNybP-8Dt5RPqMJ9gkGDsLw&s=true',
      descripcion: 'Producto 1',
      precio: 100
    },
    {
      nombre: 'SORBICID LIQUIDO',
      imagen: 'https://d2wuoo4cuot0vy.cloudfront.net/0751-7005/0751-7005_1.jpg',
      descripcion: 'Producto 2',
      precio: 120
    },
    {
      nombre: 'SORBICID TABLETAS',
      imagen: 'https://farmaciasanantonio.hn/archivos/Productos/7503013040474/7503013040474.jpg',
      descripcion: 'Producto 3',
      precio: 130
    },
    {
      nombre: 'SORBICID SUSPENSION',
      imagen: 'https://farmaciasanantonio.hn/archivos/Productos/1287/1287.jpg',
      descripcion: 'Producto 4',
      precio: 140
    }
  ];

}
