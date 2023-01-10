import { Component } from '@angular/core';
import {ServeiService} from "../serveis/servei.service";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent {

  total:any;

  cistella: number[];

  buidar: any;

  //@ts-ignore
  // productes: producte[] =
  //   [{ id: 1,
  //     nom: "Samarreta Bucks", preu: 79.99,
  //     quantitat: 0,
  //     imatge: "../assets/samarretabucks.png"},
  //     {id: 2,
  //       nom: "Gorra Bucks",
  //       preu: 32.09,
  //       quantitat: 0,
  //       image: "assets/bufanda_buks.jpg"},
  //     {id: 3,
  //       nom: "Pijama Bucks",
  //       preu: 24,
  //       quantitat: 0,
  //       imatge: "assets/pijama_bucks.png"}]
  // //@ts-ignore
  // productes2: producte2[] =
  //   [{
  //     id: 4,
  //     nom: "Samarreta Bulls", preu: 79.99,
  //     quantitat: 0,
  //     imatge: "assets/samarretabulls.png"},
  //     {id: 5,
  //       nom: "Calçotets Bulls",
  //       preu: 14.99,
  //       quantitat: 0,
  //       image: "assets/calzoncillos_bulls.jpeg"},
  //     {id: 6,
  //       nom: "Mascota Bulls",
  //       preu: 11.99,
  //       quantitat: 0,
  //       imatge: "assets/mascota_bulls.jpeg"}
  //   ]


  constructor(public s: ServeiService) {
    this.cistella = this.s.getProductes();
    this.buidar = this.s.buidarCistella();
  }

  ngOnInit(){

    console.log(this.cistella)

    console.log(this.s.getProductes())

    // let prod1 = document.getElementById('producte1')
    //
    // // @ts-ignore
    // prod1.style.display = 'none'

  }

}
