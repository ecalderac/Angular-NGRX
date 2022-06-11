import { Action } from './ngrx-fake/ngrx';
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions';


//Es una funcion comun y silvestre que recibe dos parametros, state y action, su objetivo es regresar un estado
function reducer(state = 10, action: Action){

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

console.log(reducer(10, incrementadorAction)); //11
console.log(reducer(10, decrementadorAction)); //9
console.log(reducer(10, multiplicarAction)); //20
console.log(reducer(10, dividirAction)); //5
console.log(reducer(10, resetAction)); //0
