import { client } from '$lib/sanity/client'
import { HOMEPAGE_QUERY, SITE_SETTINGS_QUERY, NAVIGATION_QUERY } from '$lib/sanity/queries'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const [page, settings, navigation] = await Promise.all([
		client.fetch(HOMEPAGE_QUERY),
		client.fetch(SITE_SETTINGS_QUERY),
		client.fetch(NAVIGATION_QUERY),
	])

	return { page, settings, navigation }
}
