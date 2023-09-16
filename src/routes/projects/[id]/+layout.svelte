<script>
	import { page } from '$app/stores';
</script>

<div class="container">
	<div class="tabs mx-auto flex justify-center">
		<a class="tab" href="/projects/{$page.params.id}/transactions">Transactions</a>
		<a class="tab tab-active" href="/projects/{$page.params.id}/users">Users</a>
	</div>
</div>
<slot />
