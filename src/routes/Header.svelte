<script>
	import { page } from '$app/stores';

	let email = $page.data.session?.user.user_metadata.name;
</script>

<header class="bg-gray-100">
	<nav class="container" id="navbar-default">
		<ul>
			<li>
				<a class="hover:text-blue-700" href="/">Home</a>
			</li>
			<li>
				<a class="hover:text-blue-700" href="/projects">Projects</a>
			</li>
		</ul>
		<ul>
			<li>{email}</li>
		</ul>
	</nav>
</header>

<style>
</style>
