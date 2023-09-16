<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	let loading = false;
	export let data: PageData;

	onMount(async () => {});

	let project = data.project;
</script>

<div class="container">
	{#if loading}
		Loading
	{:else if project == undefined}
		NotFound
	{:else}
		<table class="table w-full">
			<thead>
				<tr>
					<th>Name</th>
					<th>Amount</th>
					<th>Source</th>
				</tr>
			</thead>
			<tbody>
				{#each project.transactions ?? [] as transaction}
					<tr>
						<td>{transaction.name}</td>
						<td>{transaction.amount.toFixed(2)}€</td>
						<td>{transaction.sourceId}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
<div class="fixed grid grid-cols-3 w-full bottom-10 gap-3">
	<div></div>
	<a id="create-new-btn" class="content-center" href="/projects/{project?.id}/create-transaction">
		<button class="btn w-full">Add New</button>
	</a>
</div>

<style>
</style>
