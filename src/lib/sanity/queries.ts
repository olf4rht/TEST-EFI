const imageFields = /* groq */ `
  asset->{
    _id,
    url,
    metadata { lqip, dimensions }
  }
`

export const HOMEPAGE_QUERY = /* groq */ `
  *[_type == "page" && slug.current == "home"][0]{
    title,
    pageBuilder[]{
      _key,
      _type,
      _type == "heroSection" => {
        label,
        headline,
        body,
        ctaLabel,
        ctaUrl,
        image { ${imageFields} }
      },
      _type == "titleBodySection" => {
        label,
        title,
        body,
        ctaLabel,
        ctaUrl
      },
      _type == "bodyTextSection" => {
        leadText,
        body
      },
      _type == "infographicSection" => {
        title,
        image { ${imageFields} }
      },
      _type == "projectCarousel" => {
        title,
        projects[]->{ _id, title, subtitle, description, colorTheme, slug }
      },
      _type == "spotlightSection" => {
        article->{ _id, title, subtitle, body, image { ${imageFields} }, slug }
      }
    }
  }
`

export const SITE_SETTINGS_QUERY = /* groq */ `
  *[_type == "siteSettings"][0]{
    title,
    description,
    topBarLinks[]{ label, url },
    socialLinks,
    footerLinks[]{ label, url },
    copyrightText
  }
`

export const NAVIGATION_QUERY = /* groq */ `
  *[_type == "navigationMenu"][0]{
    title,
    categories[]{
      _key,
      label,
      items[]{
        _key,
        label,
        url
      }
    }
  }
`
