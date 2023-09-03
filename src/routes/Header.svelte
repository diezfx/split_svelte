<script>
	import { page } from '$app/stores';

	let email = $page.data.session?.user.user_metadata.name;

	const navLi = 'inline-block py-1 pl-3 pr-4 rounded hover:text-blue-700';
</script>

<header class="bg-gray-100">
	<nav class="container mx-auto" id="navbar-default">
		<div class="flex items-center justify-between mx-auto p-1">
			<ul class="font-medium flex flex-row items-center rounded-lg p-4">
				<li>
					<a class={navLi} href="/">Home</a>
				</li>

				<li>
					<a class={navLi} href="/projects" aria-current="page">Projects</a>
				</li>
			</ul>
			<ul>
				<li>{email}</li>
			</ul>
		</div>
	</nav>
</header>

<style>
</style>
