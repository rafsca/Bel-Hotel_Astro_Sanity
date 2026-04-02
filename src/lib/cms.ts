import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import groq from 'groq';

export type SiteSettings = {
  title: string;
  description: string;
  tagline: string;
  address?: string;
  phone?: string;
  email?: string;
};

export type HomepageContent = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaLabel?: string;
  heroCtaHref?: string;
  experienceSectionTitle?: string;
  experienceCards?: Array<{
    title?: string;
    description?: string;
  }>;
  featuredRoomsTitle?: string;
  featuredRoomsCtaLabel?: string;
  featuredRoomsCtaHref?: string;
};

export type NavigationSettings = {
  logoPrimary?: string;
  logoSecondary?: string;
  menuItems?: Array<{
    label?: string;
    href?: string;
  }>;
  instagram?: string;
  whatsapp?: string;
  phone?: string;
  email?: string;
};

export type RoomContent = {
  _id: string;
  title: string;
  slug?: string;
  excerpt?: string;
  price?: number;
  capacity?: number;
  image?: unknown;
  imageAlt?: string;
  amenities?: string[];
};

type SectionBase = {
  _type: string;
  _key?: string;
};

export type PageIntroSection = SectionBase & {
  _type: 'pageIntroSection';
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
  breadcrumbLabel?: string;
};

export type SplitContentSection = SectionBase & {
  _type: 'splitContentSection';
  eyebrow?: string;
  title?: string;
  content?: string;
  quote?: string;
};

export type StepsSection = SectionBase & {
  _type: 'stepsSection';
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items?: Array<{
    _key?: string;
    title?: string;
    description?: string;
  }>;
};

export type FeatureRowsSection = SectionBase & {
  _type: 'featureRowsSection';
  title?: string;
  items?: Array<{
    _key?: string;
    title?: string;
    description?: string;
    image?: unknown;
    imageAlt?: string;
  }>;
};

export type CustomTravelPageSection =
  | PageIntroSection
  | SplitContentSection
  | StepsSection
  | FeatureRowsSection;

export type CustomTravelPageContent = {
  title?: string;
  seoTitle?: string;
  seoDescription?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  heroHeightVh?: number;
  sections?: CustomTravelPageSection[];
};

export type AboutPageContent = {
  title?: string;
  description?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  visionTitle?: string;
  visionDescription?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  qualityTitle?: string;
  qualityDescription?: string;
};

export type ContactPageContent = {
  title?: string;
  description?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  directInfoTitle?: string;
  formTitle?: string;
};

export type RoomsPageContent = {
  title?: string;
  description?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
};

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-03-24';
const token = import.meta.env.SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId && dataset);

const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
      perspective: token ? 'drafts' : 'published',
    })
  : null;

const builder = client ? createImageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  return builder?.image(source);
}

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}) {
  if (!client) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params);
  } catch {
    return null;
  }
}

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  "title": coalesce(title, hotelName, "BEL Hotel"),
  "description": coalesce(description, "Esperienza di lusso e comfort nel cuore della città."),
  "tagline": coalesce(tagline, "Luxury & Comfort, Every Stay"),
  address,
  phone,
  email
}`;

const homepageQuery = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroCtaLabel,
  heroCtaHref,
  experienceSectionTitle,
  "experienceCards": coalesce(experienceCards, [])[]{
    title,
    description
  },
  featuredRoomsTitle,
  featuredRoomsCtaLabel,
  featuredRoomsCtaHref
}`;

const navigationSettingsQuery = groq`*[_type == "navigationSettings"][0]{
  "logoPrimary": coalesce(logoPrimary, "BEL"),
  "logoSecondary": coalesce(logoSecondary, "HOTEL"),
  "menuItems": coalesce(menuItems, [])[]{
    label,
    href
  },
  "instagram": social.instagram,
  "whatsapp": social.whatsapp,
  "phone": contacts.phone,
  "email": contacts.email
}`;

const roomsQuery = groq`*[_type == "room"] | order(_createdAt desc) [0...$limit]{
  _id,
  "title": coalesce(title, name),
  "slug": coalesce(slug.current, slug),
  "excerpt": coalesce(excerpt, shortDescription, description),
  price,
  capacity,
  image,
  "imageAlt": coalesce(image.alt, title),
  "amenities": amenities[]->title
}`;

const customTravelPageQuery = groq`*[_type == "customTravelPage"][0]{
  title,
  seoTitle,
  seoDescription,
  heroImage,
  "heroImageAlt": coalesce(heroImage.alt, title),
  "heroHeightVh": coalesce(heroHeightVh, 60),
  "sections": coalesce(sections, [])[]{
    _type,
    _key,
    ...,
    _type == "stepsSection" => {
      _type,
      _key,
      title,
      "ctaLabel": cta.label,
      "ctaHref": cta.href,
      "items": coalesce(items, [])[]{
        _key,
        title,
        description
      }
    },
    _type == "featureRowsSection" => {
      _type,
      _key,
      title,
      "items": coalesce(items, [])[]{
        _key,
        title,
        description,
        image,
        "imageAlt": coalesce(image.alt, title)
      }
    }
  }
}`;

const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  title,
  description,
  heroEyebrow,
  heroTitle,
  heroDescription,
  heroImage,
  "heroImageAlt": coalesce(heroImage.alt, heroTitle),
  visionTitle,
  visionDescription,
  serviceTitle,
  serviceDescription,
  qualityTitle,
  qualityDescription
}`;

const contactPageQuery = groq`*[_type == "contactPage"][0]{
  title,
  description,
  heroEyebrow,
  heroTitle,
  heroDescription,
  directInfoTitle,
  formTitle
}`;

const roomsPageQuery = groq`*[_type == "roomsPage"][0]{
  title,
  description,
  heroEyebrow,
  heroTitle,
  heroDescription
}`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch<SiteSettings>(siteSettingsQuery);
}

export async function getHomepageContent(): Promise<HomepageContent | null> {
  return safeFetch<HomepageContent>(homepageQuery);
}

export async function getNavigationSettings(): Promise<NavigationSettings | null> {
  return safeFetch<NavigationSettings>(navigationSettingsQuery);
}

export async function getRooms(limit = 6): Promise<RoomContent[]> {
  const rooms = await safeFetch<RoomContent[]>(roomsQuery, { limit });
  return rooms ?? [];
}

export async function getCustomTravelPageContent(): Promise<CustomTravelPageContent | null> {
  return safeFetch<CustomTravelPageContent>(customTravelPageQuery);
}

export async function getAboutPageContent(): Promise<AboutPageContent | null> {
  return safeFetch<AboutPageContent>(aboutPageQuery);
}

export async function getContactPageContent(): Promise<ContactPageContent | null> {
  return safeFetch<ContactPageContent>(contactPageQuery);
}

export async function getRoomsPageContent(): Promise<RoomsPageContent | null> {
  return safeFetch<RoomsPageContent>(roomsPageQuery);
}
