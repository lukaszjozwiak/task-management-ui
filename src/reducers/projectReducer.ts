import {ProjectActions} from '../actions/projectActions';
import {AnyAction} from "redux";
import {ProjectsState} from "../store/model/ProjectsState";

const initialState: ProjectsState = {
    projects: [],
};

export function projectReducer(state = initialState, action: AnyAction): ProjectsState {
    switch (action.type) {
        case ProjectActions.LOAD_PROJECTS_WITH_TASKS_SUCCESS:
            return {...state}; // TODO copy from action
        default:
            return {...state};
    }
}