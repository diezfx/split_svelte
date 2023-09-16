import { createExpenseApi } from '$lib/expenses/api'
import { fail, redirect } from '@sveltejs/kit'

export const actions = {
    default: async ({ fetch, request, url, locals: { supabase, getSession }, params }) => {
        const formData = await request.formData()
        const id = formData.get("id")
        if (id == null || id == "") {
            return fail(422, { error: "id not set" })
        }


        let session = await getSession()

        const expenseApi = createExpenseApi(fetch, session!)

        await expenseApi.addProjectUser(params.id!, { id: id.toString() })

        throw redirect(303, `/projects/${params.id}`)
    }
}