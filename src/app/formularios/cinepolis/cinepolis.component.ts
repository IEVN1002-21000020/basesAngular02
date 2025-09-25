import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre: string = '';
  cantComp: string = '';
  cantBoletos: string = '';
  tarjeta: string = '';
  precioBoleto: number = 12.00;
  total: string = '';
  res: string = '';

  descuento1: number = 0.85; // desc 15%
  descuento2: number = 0.90; // desc 10%
  descuento3: number = 0.90; //desc 10% de tarjeta


  calcularTotal(): void {
    const personas = Number(this.cantComp);
    const boletos = Number(this.cantBoletos);

    if (boletos > personas * 7) {
      this.res = 'No puedes comprar mas de 7 boletos por persona my friend';
      return;
    }

    let subtotal = boletos * this.precioBoleto;
    let descuento = 0;

    if (boletos > 5) {
      descuento = subtotal * (1 - this.descuento1);
    } else if (boletos >= 3) {
      descuento = subtotal * (1 - this.descuento2);
    }
    let totalPagar = subtotal - descuento;

    if (this.tarjeta === 'si') {
      totalPagar = totalPagar * this.descuento3;
    }

    this.total = totalPagar.toFixed(2);
    this.res = `Disfruta tu funcion ${this.nombre}, el total a pagar es $${this.total}`;
  }


}
