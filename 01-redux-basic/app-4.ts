import { Store } from "redux"
import { contadorReducer } from "./contador/contador.reducer";
import { incrementadorAction } from "./contador/contador.actions";

const store: Store = configureStore({ reducer: contadorReducer })

store.subscribe( () => {

    console.log('Subs:', store.getState());

})

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);

//no funciona ya q el store esta deprecated, se debe de buscar y cambiar, parte 19 curso redux F.H.
