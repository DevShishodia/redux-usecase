import {createStore, combineReducers, applyMiddleware} from "redux";
import reducer from "../reducers/reducer";
import logger from "redux-logger"

     const allReducers =   combineReducers({reducer});     
     
     const store = createStore(allReducers, applyMiddleware(logger));

export default store ;