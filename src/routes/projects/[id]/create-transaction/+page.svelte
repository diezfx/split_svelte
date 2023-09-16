<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	let test: string;
	let amount: string;

	let users = data.users ?? [];

	import { TransactionType } from '$lib/expenses/models';
	const transactionTypes = Object.keys(TransactionType);
</script>

<div class="container mx-auto">
	<form method="post" class="form-control grid grid-cols-1 gap-5" use:enhance>
		<div>
			<label class="label" for="name">
				<span class="label-text">Name</span>
			</label>

			<input id="name" class="input input-primary input-bordered max-w-xs" name="name" />
		</div>
		<div>
			<label for="transactionType" class="label"> TransactionType </label>

			<select
				id="transactionType"
				class="select select-bordered select-primary max-w-xs"
				bind:value={test}
			>
				{#each transactionTypes as t}
					<option selected>{t}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="source" class="label">
				<span class="label-text"> Source </span>
			</label>
			<select name="sourceId" class="select select-bordered w-full max-w-xs">
				{#each users as u}
					<option>{u.id}</option>
				{/each}
			</select>
		</div>
		<div>
			<label class="label" for="amount"> <span class="label-text">Amount</span> </label>

			<input
				type="number"
				class="input input-bordered max-w-xs"
				step="0.01"
				name="amount"
				bind:value={amount}
			/>
		</div>
		<fieldset class="h-32 overflow-auto grid grid-cols-2 max-w-xs gap-1">
			{#each users as u}
				<label for="targetIds"> {u.id}</label>
				<input class="checkbox" type="checkbox" name="targetIds" value={u.id} />
			{/each}
		</fieldset>

		<button class="btn max-w-xs">Create</button>
	</form>
</div>
