import Axios from "axios"
import {ProjectDTO} from "./ProjectDTO";

export async function getAllProjects(): Promise<ProjectDTO[]> {
    const response = await Axios.get<ProjectDTO[]>(`https://localhost:3001/projects`);
    return response.data;
}