<script lang="ts">
	import { enhance } from '$app/forms';

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
			<input name="source" />
		</label>
		<label for="amount">
			Amount
			<input type="number" name="amount" bind:value={amount} />
		</label>

		<fieldset>
			<label for="targetUser-1">
				<input type="checkbox" name="user1" />
				User1
			</label>
			<label for="targetUser-2">
				<input type="checkbox" name="user2" />
				User2
			</label>
		</fieldset>

		<button>Create</button>
	</form>
</div>
