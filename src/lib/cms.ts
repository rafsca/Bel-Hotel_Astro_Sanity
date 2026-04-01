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
      useCdn: import.meta.env.PROD,
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
  heroCtaHref
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

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch<SiteSettings>(siteSettingsQuery);
}

export async function getHomepageContent(): Promise<HomepageContent | null> {
  return safeFetch<HomepageContent>(homepageQuery);
}

export async function getRooms(limit = 6): Promise<RoomContent[]> {
  const rooms = await safeFetch<RoomContent[]>(roomsQuery, { limit });
  return rooms ?? [];
}
