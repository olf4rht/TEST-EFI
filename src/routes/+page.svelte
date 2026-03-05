<script lang="ts">
	import TopBar from '$lib/components/TopBar.svelte'
	import Navbar from '$lib/components/Navbar.svelte'
	import HeroSection from '$lib/components/HeroSection.svelte'
	import TitleBody from '$lib/components/TitleBody.svelte'
	import BodyText from '$lib/components/BodyText.svelte'
	import Infographic from '$lib/components/Infographic.svelte'
	import CardCarousel from '$lib/components/CardCarousel.svelte'
	import Spotlight from '$lib/components/Spotlight.svelte'
	import Footer from '$lib/components/Footer.svelte'

	let { data } = $props()

	let settings = $derived(data.settings)
	let navigation = $derived(data.navigation)
	let sections = $derived(data.page?.pageBuilder ?? [])
</script>

<svelte:head>
	<title>{settings?.title || 'Ethical Fashion Initiative'}</title>
</svelte:head>

<TopBar links={settings?.topBarLinks ?? [{ label: 'ITC website' }, { label: 'ITC TOOLS' }]} />

<Navbar
	siteTitle={settings?.title || 'Ethical Fashion Initiative'}
	categories={navigation?.categories ?? []}
/>

{#each sections as section (section._key)}
	{#if section._type === 'heroSection'}
		<HeroSection
			label={section.label}
			headline={section.headline}
			body={section.body}
			ctaLabel={section.ctaLabel}
			ctaUrl={section.ctaUrl}
			imageUrl={section.image?.asset?.url}
			imageAlt=""
		/>
	{:else if section._type === 'titleBodySection'}
		<TitleBody
			label={section.label}
			title={section.title}
			body={section.body}
			ctaLabel={section.ctaLabel}
			ctaUrl={section.ctaUrl}
		/>
	{:else if section._type === 'bodyTextSection'}
		<BodyText leadText={section.leadText} body={section.body} />
	{:else if section._type === 'infographicSection'}
		<Infographic
			title={section.title}
			imageUrl={section.image?.asset?.url}
		/>
	{:else if section._type === 'projectCarousel'}
		<CardCarousel
			title={section.title}
			projects={section.projects ?? []}
		/>
	{:else if section._type === 'spotlightSection'}
		<Spotlight
			title={section.article?.title}
			body={section.article?.body}
			imageUrl={section.article?.image?.asset?.url}
			ctaUrl={section.article?.slug ? `/articles/${section.article.slug.current}` : ''}
		/>
	{/if}
{/each}

<Footer
	links={settings?.footerLinks ?? []}
	copyrightText={settings?.copyrightText || 'Copyrights © 2025'}
	socialLinks={settings?.socialLinks ?? {}}
/>
