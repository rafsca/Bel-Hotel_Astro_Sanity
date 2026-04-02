import type {StructureResolver} from 'sanity/structure';

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Header & Navigation')
        .child(S.document().schemaType('navigationSettings').documentId('navigationSettings')),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Contact Page')
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.listItem()
        .title('Rooms Page')
        .child(S.document().schemaType('roomsPage').documentId('roomsPage')),
      S.listItem()
        .title('Custom Travel Page')
        .child(S.document().schemaType('customTravelPage').documentId('customTravelPage')),
      S.divider(),
      S.documentTypeListItem('amenity').title('Amenities'),
      S.documentTypeListItem('room').title('Rooms'),
    ]);
