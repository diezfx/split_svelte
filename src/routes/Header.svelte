<script>
	import { page } from '$app/stores';

	let email = $page.data.session?.user.user_metadata.name;
</script>

<header>
	<nav>
		<ul />
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
		</ul>
		<ul>
			<li>{email}</li>
		</ul>
	</nav>
</header>

<style>
	nav {
		margin-right: 4rem;
	}
</style>
