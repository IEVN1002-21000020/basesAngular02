import { Component } from '@angular/core';


//decoradores, define el nombre del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //este es el archivo html que mando a llamar
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular02';

  duplicaNumero(numero:number):number{
    return numero *2;
  }

  pelicula={
    titulo:'Batman',
    anio: new Date(),
    precio:2500
  }
}
