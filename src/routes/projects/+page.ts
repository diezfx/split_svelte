import { createExpenseApi } from '$lib/expenses/api.js';


export async function load({ fetch, params, parent }) {
    let parentVals = await parent()

    let expenseApi = createExpenseApi(fetch, parentVals.session!)

    let projects = await expenseApi.getProjects();

    return {
        projects: projects,
    };
}

