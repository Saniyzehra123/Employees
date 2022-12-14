import { legacy_createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import  { employeesreducer } from "./reducer";
import {reducer} from "./auth/reducer";

const rootReducer = combineReducers({
    employeesreducer,  reducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
rootReducer,
composeEnhancers(applyMiddleware(thunk))
);