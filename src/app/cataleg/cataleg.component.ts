import {Component, ElementRef, ViewChild} from '@angular/core';
import {ServeiService} from "../serveis/servei.service";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})

export class CatalegComponent {

  //@ts-ignore
  productes: producte[] =
    [{ id: 1,
    nom: "Samarreta Bucks", preu: 79.99,
    quantitat: 0,
    imatge: "assets/samarretabucks.png"},
      {id: 2,
        nom: "Gorra Bucks",
      preu: 32.09,
      quantitat: 0,
      image: "assets/bufanda_buks.jpg"},
      {id: 3,
        nom: "Pijama Bucks",
      preu: 24,
      quantitat: 0,
      imatge: "assets/pijama_bucks.png"}]
      //@ts-ignore
      productes2: producte2[] =
        [{
      id: 4,
          nom: "Samarreta Bulls", preu: 79.99,
      quantitat: 0,
      imatge: "assets/samarretabulls.png"},
    {id: 5,
      nom: "Calçotets Bulls",
        preu: 14.99,
        quantitat: 0,
        image: "assets/calzoncillos_bulls.jpeg"},
      {id: 6,
        nom: "Mascota Bulls",
        preu: 11.99,
        quantitat: 0,
        imatge: "assets/mascota_bulls.jpeg"}
    ]


  constructor(private s: ServeiService){

  }

  ngOnInit(){
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

  addCart(id: number){
    console.log("Afegint el producte " + id + " a la cistella")
    this.s.afegirProductes(id);
    console.log(this.s.getProductes());
  }
  }

