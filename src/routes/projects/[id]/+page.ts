import { createExpenseApi } from '$lib/expenses/api.js';

export async function load({ fetch, params, parent }) {
	let parentVals = await parent()

	let exponseApi = createExpenseApi(fetch, parentVals.session!)

	return {
		project: exponseApi.getProject(params.id),
		id: params.id
	};
}