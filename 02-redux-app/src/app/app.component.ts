import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
contador: number;

constructor( private store: Store<AppState>) {
  this.contador = 10;

  //Con esta configuracion escucha todos los estados del store
  // this.store.subscribe( state => {
  //   console.log(state);
  //   this.contador = state.contador;
  // });

  //Con esta opcion escucha una opcion del store en especifico
  // this.store.select('contador').subscribe( contador => {
  //   console.log(contador);
  //   //this.contador = state.contador;
  // });

  //misma opcion de arriba pero resumida
  this.store.select('contador')
      .subscribe(contador => this.contador = contador);

}

incrementar(){
  this.store.dispatch( actions.incrementar());
  //this.contador ++;
}

decrementar(){
  this.store.dispatch( actions.decrementar());
  //this.contador --;
}

}
