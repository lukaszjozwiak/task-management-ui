import {applyMiddleware, compose, createStore, Store} from 'redux'
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import {AppStore} from "./appStore";

export default function configureStore(): Store<AppStore> {
    return createStore(rootReducer, undefined, applyMiddleware(thunk));
}
