import { createExpenseApi } from '$lib/expenses/api.js';


export async function load({ fetch, params, parent }) {
    let parentVals = await parent()

    let expenseApi = createExpenseApi(fetch, parentVals.session!)


    const userEmail = "user1" //TODO use correct value
    parentVals.session?.user.email

    return {
        projects: expenseApi.getProjects(),
        costs: expenseApi.getUserCosts(userEmail)
    };
}

