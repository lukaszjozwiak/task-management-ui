import {AnyAction, combineReducers} from 'redux';
import {projectReducer} from './projectReducer';
import {AppStore} from "../store/appStore";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type StoreThunkAction = ThunkAction<any, AppStore, void, AnyAction> // TODO AnyAction? any ??
export type StoreDispatch = ThunkDispatch<AppStore, void, AnyAction> // TODO AnyAction? any ??

const rootReducer = combineReducers<AppStore>({
    projects: projectReducer
});

export default rootReducer;
