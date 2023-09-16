<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;

	import { TransactionType } from '$lib/expenses/models';
	const transactionTypes = Object.keys(TransactionType);
</script>

<div class="container mx-auto">
	<form method="post" class="form-control grid grid-cols-1 gap-5" use:enhance>
		<div>
			<label class="label" for="name">
				<span class="label-text">Name</span>
			</label>
			<input id="id" class="input input-primary input-bordered w-full max-w-xs" name="id" />
		</div>
		<button class="btn max-w-xs">Add</button>
	</form>
</div>
