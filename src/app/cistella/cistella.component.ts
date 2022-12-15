import { Component } from '@angular/core';

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent {
  ngOnInit(){
    let suma = document.getElementById("sumar");
    let resta = document.getElementById("restar");

    let contador = document.getElementById("prod_cant");

    let num_prod = 0;



    //@ts-ignore
    suma.onclick = function sumar(){
      //@ts-ignore
      num_prod++;
      //@ts-ignore
      contador.innerHTML = num_prod;
    }

    //@ts-ignore
    resta.onclick = function restar(){
      //@ts-ignore
      num_prod--;
      //@ts-ignore
      if (num_prod < 0){
        num_prod = 0;
        //@ts-ignore
        contador.innerHTML = num_prod;
      } else{
        //@ts-ignore
        contador.innerHTML = num_prod;
      }
    }

    let suma_1_2 = document.getElementById("sumar_1_2");
    let resta_1_2 = document.getElementById("restar_1_2");

    let contador_1_2 = document.getElementById("prod_cant_1_2");

    let num_prod_1_2 = 0;



    //@ts-ignore
    suma_1_2.onclick = function sumar(){
      //@ts-ignore
      num_prod_1_2++;
      //@ts-ignore
      contador_1_2.innerHTML = num_prod_1_2;
    }

    //@ts-ignore
    resta_1_2.onclick = function restar(){
      //@ts-ignore
      num_prod_1_2--;
      //@ts-ignore
      if (num_prod_1_2 < 0){
        num_prod_1_2 = 0;
        //@ts-ignore
        contador_1_2.innerHTML = num_prod_1_2;
      } else{
        //@ts-ignore
        contador_1_2.innerHTML = num_prod_1_2;
      }
    }

    let suma_1_3 = document.getElementById("sumar_1_3");
    let resta_1_3 = document.getElementById("restar_1_3");

    let contador_1_3 = document.getElementById("prod_cant_1_3");

    let num_prod_1_3 = 0;



    //@ts-ignore
    suma_1_3.onclick = function sumar(){
      //@ts-ignore
      num_prod_1_3++;
      //@ts-ignore
      contador_1_3.innerHTML = num_prod_1_3;
    }

    //@ts-ignore
    resta_1_3.onclick = function restar(){
      //@ts-ignore
      num_prod_1_3--;
      //@ts-ignore
      if (num_prod_1_3 < 0){
        num_prod_1_3 = 0;
        //@ts-ignore
        contador_1_3.innerHTML = num_prod_1_3;
      } else{
        //@ts-ignore
        contador_1_3.innerHTML = num_prod_1_3;
      }
    }

    let suma2 = document.getElementById("sumar2");
    let resta2 = document.getElementById("restar2");

    let contador2 = document.getElementById("prod_cant2");

    let num_prod2 = 0;

    //@ts-ignore
    suma2.onclick = function sumar(){
      //@ts-ignore
      num_prod2++;
      //@ts-ignore
      contador2.innerHTML = num_prod2;
    }

    //@ts-ignore
    resta2.onclick = function restar(){
      //@ts-ignore
      num_prod2--;
      //@ts-ignore
      if (num_prod2 < 0){
        num_prod2 = 0;
        //@ts-ignore
        contador2.innerHTML = num_prod2;
      } else{
        //@ts-ignore
        contador2.innerHTML = num_prod2;
      }
    }

  }

}
