import { createExpenseApi } from '$lib/expenses/api.js';


export async function load({ fetch, params }) {
    let expenseApi = createExpenseApi(fetch)

    let projects = await expenseApi.getProjects();

    return {
        projects: projects,
    };
}

