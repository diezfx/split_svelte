<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	let test: string;
	let amount: string;

	import { TransactionType } from '$lib/expenses/models';
	const transactionTypes = Object.keys(TransactionType);
</script>

<div class="container">
	<form method="post" use:enhance>
		<label for="name">
			Name
			<input id="name" name="name" />
		</label>
		<label for="transactionType">
			TransactionType
			<select id="transactionType" bind:value={test}>
				{#each transactionTypes as t}
					<option selected>{t}</option>
				{/each}
			</select>
		</label>
		<label for="source">
			Source
			<select name="sourceId">
				{#each data.users as u}
					<option>{u.id}</option>
				{/each}
			</select>
		</label>
		<label for="amount">
			Amount
			<input type="number" step="0.01" name="amount" bind:value={amount} />
		</label>

		<fieldset>
			{#each data.users as u}
				<label>
					<input type="checkbox" name="targetIds" value={u.id} />
					{u.id}
				</label>
			{/each}
		</fieldset>

		<button>Create</button>
	</form>
</div>
