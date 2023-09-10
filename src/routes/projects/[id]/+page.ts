import { createExpenseApi } from '$lib/expenses/api.js';

export async function load({ fetch, params, parent }) {
	let parentVals = await parent()

	let exponseApi = createExpenseApi(fetch, parentVals.session!)
	let project = await exponseApi.getProject(params.id);
	let projectUsers = await exponseApi.getProjectUsers(params.id);

	return {
		project: project,
		id: params.id
	};
}

