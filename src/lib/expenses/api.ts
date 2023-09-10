import { cfg } from "$lib/config/config";
import type { Session } from "@supabase/supabase-js";
import type { Project, Transaction, User } from "./models";
import type { Fetch } from "@supabase/supabase-js/dist/module/lib/types";


export interface ExpenseApi {
    getProjects(): Promise<Project[]>
    getProject(id: string): Promise<Project | null>
    addProject(proj: Project): Promise<any>
    addTransaction(projId: string, transaction: Transaction): Promise<any>
    getProjectUsers(id: string): Promise<User[] | null>
}


export function createExpenseApi(fetch: Fetch, session: Session): ExpenseApi {

    const authHeader = { "Authorization": `Bearer ${session.access_token}` }

    async function getProjects(): Promise<Project[]> {
        const path = `${cfg.apiUrl}/api/v1.0/projects`
        let resp = await fetch(path, { headers: authHeader })
        let projectList = await resp.json() as Project[]
        return projectList;
    }


    async function getProject(id: string): Promise<Project | null> {
        const path = `${cfg.apiUrl}/api/v1.0/projects/${id}`
        let resp = await fetch(path, { headers: authHeader })
        let project = await resp.json() as Project
        return project;
    }

    async function getProjectUsers(id: string): Promise<User[] | null> {
        const path = `${cfg.apiUrl}/api/v1.0/projects/${id}/users`
        let resp = await fetch(path, { headers: authHeader })
        if (resp.status > 300) {
            console.log(resp)
        }
        let users = await resp.json() as User[]
        return users;
    }


    async function addProject(proj: Project): Promise<any> {
        const path = `${cfg.apiUrl}/api/v1.0/projects`
        let response = await fetch(path, { method: "POST", body: JSON.stringify(proj), headers: authHeader })
        if (response.status > 300) {
            console.log(response)
        }

        return response
    }

    async function addTransaction(projId: string, transaction: Transaction): Promise<any> {
        const path = `${cfg.apiUrl}/api/v1.0/projects/${projId}/transactions`
        let response = await fetch(path, { method: "POST", body: JSON.stringify(transaction), headers: authHeader })
        if (response.status > 300) {
            console.log(response)
        }
        return
    }



    return { getProjects, getProject, addProject, addTransaction, getProjectUsers }



}






