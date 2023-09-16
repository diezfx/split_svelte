import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params, parent }) {
	throw redirect(303, `/projects/${params.id}/transactions`)
}