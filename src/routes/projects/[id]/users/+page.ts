import { createExpenseApi } from '$lib/expenses/api.js';

export async function load({ fetch, params, parent }) {
	let parentVals = await parent()

	let exponseApi = createExpenseApi(fetch, parentVals.session!)

	return {
		users: exponseApi.getProjectUsers(params.id),
		costs: exponseApi.getProjectCosts(params.id),
		id: params.id
	};
}

