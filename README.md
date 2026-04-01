# BEL Hotel — Astro + Sanity

Sito hotel sviluppato con **Astro**, **React UI components** e integrazione **Sanity CMS**.

## Stack

- Astro 6
- Tailwind CSS 4
- React (per componenti interattivi)
- Sanity (`@sanity/client`, `@sanity/image-url`)

## Setup rapido

1. Installa dipendenze:

```sh
npm install
```

2. Copia `.env.example` in `.env` e imposta i valori:

```env
PUBLIC_SANITY_PROJECT_ID=...
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-03-24
```

3. Avvia il progetto:

```sh
npm run dev
```

## Script

| Command | Descrizione |
| :-- | :-- |
| `npm run dev` | Avvia il server locale |
| `npm run build` | Build produzione |
| `npm run preview` | Preview build |

## Contenuti Sanity

Il frontend prova a leggere questi tipi documento:

- `siteSettings` (titolo, descrizione, contatti)
- `homepage` (hero text e CTA)
- `room` (camere)

Se Sanity non è configurato, il sito mostra fallback locali mantenendo lo stile del progetto.

## Sanity Studio

Lo Studio è già configurato in locale con questi schema:

- `siteSettings`
- `homepage`
- `amenity`
- `room`

### Avvio Studio

```sh
npm run studio:dev
```

Studio disponibile su `http://localhost:3333`.

### Primo popolamento consigliato

1. Crea un documento `siteSettings`
2. Crea un documento `homepage`
3. Crea alcune `amenity` (wifi, spa, breakfast, ...)
4. Crea le `room` e collega le amenities

Dopo la pubblicazione dei documenti, il frontend Astro leggerà i contenuti dal CMS.

## Pagine principali

- `/` Home
- `/rooms` Camere
- `/about` Chi siamo
- `/contact` Contatti
