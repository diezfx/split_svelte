<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let projectList = data.projects;
</script>

<div class="container">
	<table>
		<thead>
			<th scope="col">Name</th>
			<th scope="col">#Member</th>
		</thead>
		<tbody>
			{#each projectList as project, index}
				<tr>
					<td><a href="projects/{project.id}">{project.name}</a></td>
					<td>{project.members.length}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
