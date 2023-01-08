import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements AfterViewInit{
@ViewChild('forViewChild') forViewChild!: ElementRef;
  ngAfterViewInit() {
  this.forViewChild.nativeElement.value = 'elteucorreu@gmail.com'
}
}

