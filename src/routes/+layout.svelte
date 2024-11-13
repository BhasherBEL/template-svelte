<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import Header from './Header.svelte';
	import { t } from '$lib/translations';

	let { data, children }: { data: LayoutData; children: any } = $props();

	console.log('layout', data);
</script>

<svelte:head>
	<title>{$t('common.name')}</title>
</svelte:head>

<Header {data} />

{@render children()}
