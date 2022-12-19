import { Component } from '@angular/core';

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent {

  total:any;

  constructor() {
    this.total = 0;
  }

  ngOnInit(){
    let preu1 = document.getElementById("preu_1");
    let preu2 = document.getElementById("preu_2");
    let preu3 = document.getElementById("preu_3");
    let preu4 = document.getElementById("preu_4");
    let preu5 = document.getElementById("preu_5");
    let preu6 = document.getElementById("preu_6");

    let suma = document.getElementById("sumar");
    let resta = document.getElementById("restar");

    let contador = document.getElementById("prod_cant");

    let num_prod = 0;

    let ola = 0;


    //@ts-ignore
    suma.onclick = function sumar(){
      //@ts-ignore
      num_prod++;
      //@ts-ignore
      ola = (parseInt(preu1.innerHTML) * num_prod)
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

    let contador2 = document.getElementById("prod_cant_1_2");

    let num_prod_1_2 = 0;



    //@ts-ignore
    suma_1_2.onclick = function sumar(){
      //@ts-ignore
      num_prod_1_2++;
      //@ts-ignore
      contador2.innerHTML = num_prod_1_2;
    }

    //@ts-ignore
    resta_1_2.onclick = function restar(){
      //@ts-ignore
      num_prod_1_2--;
      //@ts-ignore
      if (num_prod_1_2 < 0){
        num_prod_1_2 = 0;
        //@ts-ignore
        contador2.innerHTML = num_prod_1_2;
      } else{
        //@ts-ignore
        contador2.innerHTML = num_prod_1_2;
      }
    }

    let suma_1_3 = document.getElementById("sumar_1_3");
    let resta_1_3 = document.getElementById("restar_1_3");

    let contador3 = document.getElementById("prod_cant_1_3");

    let num_prod_1_3 = 0;



    //@ts-ignore
    suma_1_3.onclick = function sumar(){
      //@ts-ignore
      num_prod_1_3++;
      //@ts-ignore
      contador3.innerHTML = num_prod_1_3;
    }

    //@ts-ignore
    resta_1_3.onclick = function restar(){
      //@ts-ignore
      num_prod_1_3--;
      //@ts-ignore
      if (num_prod_1_3 < 0){
        num_prod_1_3 = 0;
        //@ts-ignore
        contador3.innerHTML = num_prod_1_3;
      } else{
        //@ts-ignore
        contador3.innerHTML = num_prod_1_3;
      }
    }

    let suma2 = document.getElementById("sumar2");
    let resta2 = document.getElementById("restar2");

    let contador4 = document.getElementById("prod_cant2");

    let num_prod2 = 0;

    //@ts-ignore
    suma2.onclick = function sumar(){
      //@ts-ignore
      num_prod2++;
      //@ts-ignore
      contador4.innerHTML = num_prod2;
    }

    //@ts-ignore
    resta2.onclick = function restar(){
      //@ts-ignore
      num_prod2--;
      //@ts-ignore
      if (num_prod2 < 0){
        num_prod2 = 0;
        //@ts-ignore
        contador4.innerHTML = num_prod2;
      } else{
        //@ts-ignore
        contador4.innerHTML = num_prod2;
      }
    }

    let suma2_2 = document.getElementById("sumar_2_2");
    let resta2_2 = document.getElementById("restar_2_2");

    let contador5 = document.getElementById("prod2_cant2");

    let num_prod2_2 = 0;

    //@ts-ignore
    suma2_2.onclick = function sumar(){
      //@ts-ignore
      num_prod2_2++;
      //@ts-ignore
      contador5.innerHTML = num_prod2_2;
    }

    //@ts-ignore
    resta2_2.onclick = function restar(){
      //@ts-ignore
      num_prod2_2--;
      //@ts-ignore
      if (num_prod2_2 < 0){
        num_prod2_2 = 0;
        //@ts-ignore
        contador5.innerHTML = num_prod2_2;
      } else{
        //@ts-ignore
        contador5.innerHTML = num_prod2_2;
      }
    }

    let suma2_3 = document.getElementById("sumar_2_3");
    let resta2_3 = document.getElementById("restar_2_3");

    let contador6 = document.getElementById("prod2_cant3");

    let num_prod2_3 = 0;

    //@ts-ignore
    suma2_3.onclick = function sumar(){
      //@ts-ignore
      num_prod2_3++;
      //@ts-ignore
      contador6.innerHTML = num_prod2_3;
    }

    //@ts-ignore
    resta2_3.onclick = function restar(){
      //@ts-ignore
      num_prod2_3--;
      //@ts-ignore
      if (num_prod2_3 < 0){
        num_prod2_3 = 0;
        //@ts-ignore
        contador6.innerHTML = num_prod2_3;
      } else{
        //@ts-ignore
        contador6.innerHTML = num_prod2_3;
      }
    }

    // @ts-ignore
    this.total = parseInt(preu1.innerHTML)* num_prod + '€';


    const el = document.getElementById('contenidor1')

    const buto = document.getElementById('buto_bulls')

    if (el != null && buto != null){
      buto.addEventListener('click', function Click(){
        if (el.style.display === 'none') {
          el.style.display = 'block';

          buto.textContent = 'Bulls'

          buto.style.backgroundColor = 'grey'
        } else{
          el.style.display = 'none'

          buto.textContent = 'Bulls'

          buto.style.backgroundColor = 'red'
        }
      })
    }

    const el2 = document.getElementById('contenidor2')
    const buto2 = document.getElementById('buto_bucks')

    if (el2 != null && buto2 != null){
      buto2.addEventListener('click', function Click(){
        if (el2.style.display === 'none') {
          el2.style.display = 'block';

          buto2.textContent = 'Bucks'

          buto2.style.backgroundColor = 'grey'
        } else{
          el2.style.display = 'none'

          buto2.textContent = 'Bucks'

          buto2.style.backgroundColor = 'red'
        }
      })
    }

  }

}
