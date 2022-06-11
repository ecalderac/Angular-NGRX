import { Reducer } from "redux";
import { Action } from "../ngrx-fake/ngrx";

//Es una funcion comun y silvestre que recibe dos parametros, state y action, su objetivo es regresar un estado
export function contadorReducer(state = 10, action: Action){

    // if(action.type === 'INCREMENTAR'){
    //     return state += 1;
    // }

    switch(action.type){
        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
            return state -= 1;
        
        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        case 'RESET':
            return 0;

        default:
            return state;
    }

    //return state; //siempre debe de regresar un estado
}