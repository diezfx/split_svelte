<script lang="ts">
	import { enhance } from '$app/forms';

	let test: string;
	let amount: string;

	import { TransactionType } from '$lib/expenses/models';
	const transactionTypes = Object.keys(TransactionType);
</script>

<div class="container">
	<form method="post" class="form-control grid grid-cols-1 gap-5" use:enhance>
		<div>
			<label class="label" for="name">
				<span class="label-text">Name</span>
			</label>
			<input id="name" class="input input-primary input-bordered max-w-xs" name="name" />
		</div>

		<button>Create</button>
	</form>
</div>
