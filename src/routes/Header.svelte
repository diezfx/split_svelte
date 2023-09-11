<script>
	import { page } from '$app/stores';

	let email = $page.data.session?.user.user_metadata.name;
</script>

<header class="bg-slate-200">
	<nav class="container navbar" id="navbar-default">
		<div class="navbar-start"></div>
		<div class="navbar-center flex">
			<ul class="menu menu-horizontal px-1">
				<li>
					<a class="hover:text-blue-700" href="/">Home</a>
				</li>
				<li>
					<a class="hover:text-blue-700" href="/projects">Projects</a>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<ul>
				<li>{email}</li>
			</ul>
		</div>
	</nav>
</header>

<style>
</style>
