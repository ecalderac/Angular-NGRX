import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() {
    this.contador = 0;
  }

  multiplicar(){
    this.contador *=2;
    this.cambioContador.emit(this.contador)
  }

  dividir(){
    this.contador /=2;
    this.cambioContador.emit(this.contador)
  }

  resetNieto(nuevoContador: any){
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador)
  }

  ngOnInit(): void {
  }

}
