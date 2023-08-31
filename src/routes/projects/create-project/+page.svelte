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

		<button>Create</button>
	</form>
</div>
