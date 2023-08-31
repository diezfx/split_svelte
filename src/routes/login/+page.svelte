<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};

	const handleSignIn = async () =>
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				queryParams: {
					access_type: 'offline',
					prompt: 'consent'
				},
				redirectTo: `${location.origin}/auth/callback`
			}
		});

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<form on:submit={handleSignUp}>
	<label for="email">
		Email
		<input name="email" bind:value={email} />
	</label>
	<label for="password">
		Password
		<input type="password" name="password" bind:value={password} />
	</label>
	<button>Sign up</button>
</form>

<button on:click={handleSignIn}>Sign in</button>
<button on:click={handleSignOut}>Sign out</button>
