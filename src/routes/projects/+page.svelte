<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let projectList = data.projects;
</script>

<div class="container mx-auto">
	<table class="table w-full">
		<thead class="bg-primary-50">
			<th scope="col">Name</th>
			<th scope="col">#Member</th>
		</thead>
		<tbody>
			{#each projectList as project, index}
				<tr class="border-b">
					<td><a href="projects/{project.id}">{project.name}</a></td>
					<td>{project.members.length}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="fixed grid grid-cols-3 w-full bottom-10">
	<div></div>
	<a id="create-new-btn" class="content-center" href="projects/create-project">
		<button class="button">Add New</button>
	</a>
</div>

<style lang="postcss">
</style>
