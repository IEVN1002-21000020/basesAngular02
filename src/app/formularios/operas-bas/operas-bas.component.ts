import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

num1:string="";
num2:string="";
res:string="";
opera:string="";





sumar():void{
  this.res = (parseInt(this.num1) + parseInt(this.num2)).toString();

}

restar():void{
  this.res = (parseInt(this.num1) - parseInt(this.num2)).toString();

}

multiplicar():void{
  this.res = (parseInt(this.num1) * parseInt(this.num2)).toString();

}

dividir():void{
  this.res = (parseInt(this.num1) / parseInt(this.num2)).toString();

}
calculos():void{
switch (this.opera){
  case 'Suma':
        this.sumar();
        break;
      case 'Resta':
        this.restar();
        break;
      case 'Multiplicar':
        this.multiplicar();
        break;
      case 'Dividir':
        this.dividir();
        break;
}

}


}
