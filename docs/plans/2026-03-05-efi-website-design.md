# EFI Website Design

## Overview
Homepage for Ethical Fashion Initiative (EFI) built with SvelteKit + Sanity CMS, deployed to Cloudflare Pages.

## Tech Stack
- SvelteKit + TypeScript + Tailwind CSS v4
- Sanity CMS (org: Olfarhat, embedded Studio at /studio)
- Fonts: ABC Repro, Instrument Sans, Zilla Slab
- Cloudflare Pages deployment
- GitHub repo: TEST-EFI

## Sanity Schemas

### Document Types
- `siteSettings` (singleton): site title, logo, social links, footer links, top bar links
- `page`: slug, title, page builder sections array
- `project`: title, subtitle, description, color theme, slug (colored cards)
- `article`: title, subtitle, body, image, slug (spotlight/featured)
- `navigationMenu`: nav categories with sub-items

### Page Builder Blocks
- `heroSection`: subtitle label, headline, body, CTA, hero image
- `titleBodySection`: label, title, body, CTA
- `bodyTextSection`: rich text with bold lead
- `infographicSection`: title + image/SVG
- `projectCarousel`: references to projects
- `spotlightSection`: reference to article

## Design Tokens
| Token | Value |
|-------|-------|
| dark-blue | #003552 |
| black | #1E1E1E |
| grey | #999997 |
| grey-10 | #F5F5F5 |
| off-white | #F6F6F6 |
| beige-10 | #EDEBE0 |
| beige | #DCD8C1 |
| green | #3C6E55 |
| blue-60 | #019EEB |

## Components
- TopBar, Navbar, HeroSection, TitleBody, BodyText, Infographic, CardCarousel, ColoredCard, Spotlight, Footer

## Implementation Steps
1. Scaffold SvelteKit + Tailwind
2. Init Sanity project + schemas
3. Build components from Figma
4. Wire Sanity data fetching
5. Seed CMS content
6. Push to GitHub
7. Deploy to Cloudflare Pages
