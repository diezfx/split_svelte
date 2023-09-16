import { cfg } from "$lib/config/config";
import type { Session } from "@supabase/supabase-js";
import type { Project, ProjectCosts, Transaction, User, UserCosts } from "./models";
import type { Fetch } from "@supabase/supabase-js/dist/module/lib/types";


export interface ExpenseApi {
    getProjects(): Promise<Project[]>
    getProject(id: string): Promise<Project | null>
    addProject(proj: Project): Promise<any>
    addTransaction(projId: string, transaction: Transaction): Promise<any>
    getProjectUsers(id: string): Promise<User[] | null>
    getProjectCosts(id: string): Promise<ProjectCosts | null>
    getUserCosts(id: string): Promise<UserCosts | null>
    addProjectUser(projectId: string, user: User): Promise<any>
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

    async function getUserCosts(userId: string,): Promise<UserCosts | null> {
        const path = `${cfg.apiUrl}/api/v1.0/users/${userId}/costs`
        let response = await fetch(path, { method: "GET", headers: authHeader })
        if (response.status > 300) {
            console.log(response)
            return null
        }
        return response.json()
    }

    async function getProjectCosts(projectId: string): Promise<ProjectCosts | null> {
        const path = `${cfg.apiUrl}/api/v1.0/projects/${projectId}/costs`
        let response = await fetch(path, { method: "GET", headers: authHeader })
        if (response.status > 300) {
            console.log(response)
            return null
        }
        return response.json()
    }

    async function addProjectUser(projectId: string, user: User): Promise<any> {
        const path = `${cfg.apiUrl}/api/v1.0/projects/${projectId}/users`
        let response = await fetch(path, { method: "POST", body: JSON.stringify(user), headers: authHeader })
        if (response.status > 300) {
            console.log(response)
        }
    }



    return { getProjects, getProject, addProject, addTransaction, getProjectUsers, getUserCosts, addProjectUser, getProjectCosts }



}






