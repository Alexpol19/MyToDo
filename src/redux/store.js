import app from "./app";
import countries from "./countries";
import todos from "./todos";
import { reducer as formReducer } from 'redux-form';
import auth from "./auth";
import usersTodos from "./usersTodos";
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware, compose} = require("redux");

let reducers = combineReducers({
    app,
    auth,
    usersTodos,
    todos,
    countries,
    form: formReducer,
});

// -- connect redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
// without dev tools
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;