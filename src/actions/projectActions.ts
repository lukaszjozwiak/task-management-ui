import {AnyAction} from "redux";
import {ProjectDTO} from "../api/ProjectDTO";
import {getAllProjects} from "../api/projectApi";
import {StoreDispatch, StoreThunkAction} from "../reducers";

export enum ProjectActions {
    LOAD_PROJECTS_WITH_TASKS_SUCCESS = 'LOAD_PROJECTS_WITH_TASKS_SUCCESS',
    LOAD_PROJECTS_WITH_TASKS_ERROR = 'LOAD_PROJECTS_WITH_TASKS_ERROR',
}

export function loadProjectsSuccess(projectDTOs: Array<ProjectDTO>): AnyAction { // TODO AnyAction or maybe defined action ?
    return {
        type: ProjectActions.LOAD_PROJECTS_WITH_TASKS_SUCCESS,
        projectDTOs
    };
}

export function loadProjects(): StoreThunkAction {
    return (dispatch: StoreDispatch) => {
        return getAllProjects().then(authors => {
            dispatch(loadProjectsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
