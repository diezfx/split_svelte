import { createExpenseApi } from '$lib/expenses/api.js';

export async function load({ fetch, params }) {
	let exponseApi = createExpenseApi(fetch)
	let project = await exponseApi.getProject(params.id);

	return {
		project: project,
		id: params.id
	};
}

