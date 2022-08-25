import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";

// create myLogger Middleware (Curried Function)
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcommingState = [action].reduce(rootReducer, store.getState()) 
    console.log(`Upcomming State: ${JSON.stringify(upcommingState)}`);
    //Pass Action
    return next(action)
}

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;