import { Component } from '@angular/core';

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent {
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
}
