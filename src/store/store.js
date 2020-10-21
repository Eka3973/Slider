import {applyMiddleware, combineReducers, createStore} from "redux";
import sliderReducer from "../reducers/slider";
import logger from 'redux-logger'


const reducers = combineReducers({
    slider: sliderReducer,

});

const store = createStore(reducers, applyMiddleware(logger))
export default store;


