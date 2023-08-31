import type { Project } from "$lib/expenses/models.js"
import { v4 } from "uuid"

export const actions = {
    default: async ({ request, url, locals: { supabase } }) => {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const password = formData.get('password') as string

        console.log(formData.get("name"))

        let project = { id: v4(), name: name } as Project



        return {
            message: 'Please check your email for a magic link to log into the website.',
            success: true,
        }
    },
}