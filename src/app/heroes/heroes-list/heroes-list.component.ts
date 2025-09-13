import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',

})
export class HeroesListComponent {

  heroes:any[]=[
    {
      "Imagen":"https://dragonball-api.com/characters/goku_normal.webp",
      Nombre:"Goku",
      Descripcion:"Kakaroto",
      Raza:"Siyin",
      Ki:9000
    },
    {
      "Imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
      Nombre:"Spiderman",
      Descripcion:"peter parker",
      Raza:"Humano",
      Ki:2500
    },
     {
      "Imagen":"https://dragonball-api.com/characters/vegeta_normal.webp",
      Nombre:"Vegetta",
      Descripcion:"Morado777",
      Raza:"Siyin",
      Ki:8200
    },
    {
      "Imagen":"https://dragonball-api.com/characters/bulma.webp",
      Nombre:"Bulma",
      Descripcion:"chica verde",
      Raza:"Humano",
      Ki:0
    }

  ]

}
