<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(async () => {});

	let users = data.users ?? [];
	let totalCosts = data.costs?.totalCosts;
	let costs = data.costs?.costsByUser ?? {};
</script>

<div class="container">
	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Balance</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<tr>
					<td>{user.id}</td>
					<td>{(costs[user.id]?.balance ?? 0).toFixed(2)}€</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<div class="fixed grid grid-cols-3 w-full bottom-10 gap-3">
	<div></div>
	<a id="create-new-btn" class="content-center" href="/projects/{data?.id}/add-user">
		<button class="btn w-full">Add User</button>
	</a>
</div>

<style>
</style>
