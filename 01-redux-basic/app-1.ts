
//Acciones
interface Action {
    type: string;
    payload?: any;
}

// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// };

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

        default:
            return state;
    }

    //return state; //siempre debe de regresar un estado
}

//Usar el reducer

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

console.log(reducer(10, incrementadorAction)); //11

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

console.log(reducer(10, decrementadorAction)); //9

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

console.log(reducer(10, multiplicarAction)); //20

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

console.log(reducer(10, dividirAction)); //5