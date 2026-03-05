import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {
  siteSettings,
  navigationMenu,
  page,
  project,
  article,
  heroSection,
  titleBodySection,
  bodyTextSection,
  infographicSection,
  projectCarousel,
  spotlightSection,
} from './src/lib/sanity/schemas'

export default defineConfig({
  name: 'efi-website',
  title: 'EFI Website',
  projectId: 'k0z0sdep',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      siteSettings,
      navigationMenu,
      page,
      project,
      article,
      heroSection,
      titleBodySection,
      bodyTextSection,
      infographicSection,
      projectCarousel,
      spotlightSection,
    ],
  },
})
