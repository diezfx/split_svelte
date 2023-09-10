import { createExpenseApi } from "$lib/expenses/api"
import type { Project } from "$lib/expenses/models.js"
import type { Session } from "@supabase/supabase-js"
import { redirect, type Actions } from "@sveltejs/kit"
import { v4 } from "uuid"

export const actions = {
    default: async ({ fetch, request, url, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const password = formData.get('password') as string
        console.log(formData.get("name"))

        let session = await getSession() as Session


        let project = { id: v4(), name: name, members: [session.user.email] } as Project

        let expenseApi = createExpenseApi(fetch, session)
        await expenseApi.addProject(project)


        throw redirect(303, "/projects")
    },
} satisfies Actions