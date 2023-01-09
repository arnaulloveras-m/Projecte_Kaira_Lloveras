import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//@ts-ignore
export class ServeiService {

  productes: number[] = [0,0,0,0,0,0,0];

  constructor() { }

  afegirProductes(id: any){
    this.productes[id]++;
  }

  esborrarProductes(id: any){
    if(this.productes[id] < 0){
      this.productes[id]--;
    }
  }

  getProductes(){
    return this.productes;
  }

}