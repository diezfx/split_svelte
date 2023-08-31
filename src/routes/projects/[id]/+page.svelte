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
		<table>
			<thead>
				<th>Name</th>
				<th>Amount</th>
				<th>Source</th>
			</thead>
			{#each project.transactions as transaction}
				<tr>
					<td>{transaction.name}</td>
					<td>{transaction.amount.toFixed(2)}€</td>
					<td>{transaction.sourceId}</td>
				</tr>
			{/each}
		</table>
	{/if}

	<nav>test</nav>
</div>

<style>
	table {
		width: 100%;
		table-layout: fixed;
	}
</style>
