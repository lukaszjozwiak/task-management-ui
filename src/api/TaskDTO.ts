import {TaskStatusDTOEnum} from "./TaskStatusDTOEnum";

export interface TaskDTO {
    name: string;
    details: string;
    status: TaskStatusDTOEnum;
    created_at?: Date;
    last_updated_at?: Date;
}
