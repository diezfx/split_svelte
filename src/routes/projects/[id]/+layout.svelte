<script>
	import { page } from '$app/stores';

	console.log($page.url.pathname);
</script>

<div class="container">
	<div class="tabs mx-auto flex justify-center">
		<a
			class:tab-active={$page.url.pathname == `/projects/${$page.params.id}/transactions`}
			class="tab"
			href="/projects/{$page.params.id}/transactions">Transactions</a
		>
		<a
			class:tab-active={$page.url.pathname == `/projects/${$page.params.id}/users`}
			class="tab"
			href="/projects/{$page.params.id}/users"
		>
			Users
		</a>
	</div>
</div>
<slot />
