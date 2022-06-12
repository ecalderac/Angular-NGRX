import { createReducer, on, Action } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";



// export function contadorReducer( state: number = 10, action: Action){

//     switch( action.type ){

//         case incrementar.type:
//             return state + 1;
        
//         case decrementar.type:
//             return state -1;

//         default:
//             return state;

//     }

// }

export const initialState = 20;

export const _contadorReducer = createReducer(initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
);

export function contadorReducer(state: number = initialState, action: Action) {
    return _contadorReducer(state, action);
  }