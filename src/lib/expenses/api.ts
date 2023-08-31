import { cfg } from "$lib/config/config";
import type { Project } from "./models";
import type { Fetch } from "@supabase/supabase-js/dist/module/lib/types";



export interface ExpenseApi {
    getProjects(): Promise<Project[]>
    getProject(id: string): Promise<Project | null>
    addProject(proj: Project): Promise<any>
}


export function createExpenseApi(fetch: Fetch): ExpenseApi {
    async function getProjects(): Promise<Project[]> {
        const path = `${cfg.apiUrl}/api/v1.0/projects`
        let resp = await fetch(path)
        let projectList = await resp.json() as Project[]
        return projectList;
    }


    async function getProject(id: string): Promise<Project | null> {
        const path = `${cfg.apiUrl}/api/v1.0/projects/${id}`
        let resp = await fetch(path)
        let project = await resp.json() as Project
        return project;
    }


    async function addProject(proj: Project): Promise<any> {
        const path = `${cfg.apiUrl}/api/v1.0/projects`
        let response = await fetch(path, { method: "POST" })

        return response.json()
    }

    return { getProjects, getProject, addProject }



}






