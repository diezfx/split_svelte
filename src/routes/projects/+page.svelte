<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
	let projectList = data.projects ?? [];
</script>

<div class="container grid gap-4 mx-auto">
	<div class="card bg-base-100 shadow-md">
		<div class="card-body">
			<h2 class="card-title">My Saldo</h2>
			<div class="grid grid-cols-2">
				<div>Expenses</div>
				<div>{data.costs?.totalCosts.expenses}</div>
				<div>Income</div>
				<div>{data.costs?.totalCosts.income}</div>
				<div>Balance</div>
				<div>{data.costs?.totalCosts.balance}</div>
			</div>
		</div>
	</div>
	<div class="card bg-base-100 shadow-md">
		<div class="card-body">
			<h2 class="card-title">My Projects</h2>
			<table class="table w-full">
				<thead class="bg-primary-50">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">#Transactions</th>
						<th scope="col">My Balance</th>
					</tr>
				</thead>
				<tbody>
					{#each projectList as project, index}
						<tr class="border-b">
							<td><a href="projects/{project.id}">{project.name}</a></td>
							<td>{project.transactions.length}</td>
							<td>{data.costs?.projectCosts[project.id]?.balance ?? 0}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<div class="fixed grid grid-cols-3 w-full bottom-10">
	<div></div>
	<a id="create-new-btn" class="content-center" href="projects/create-project">
		<button class="btn w-full">Add New</button>
	</a>
</div>

<style lang="postcss">
</style>
