import {amenityType} from './amenity';
import {
	customTravelPageType,
	featureRowsSectionType,
	pageIntroSectionType,
	splitContentSectionType,
	stepsSectionType,
} from './customTravelPage';
import {homepageType} from './homepage';
import {navigationSettingsType} from './navigationSettings';
import {
	aboutPageType,
	contactPageType,
	experiencesPageType,
	projectsPageType,
	roomsPageType,
	toursPageType,
} from './pagesContent';
import {roomType} from './room';
import {siteSettingsType} from './siteSettings';

export const schemaTypes = [
	siteSettingsType,
	navigationSettingsType,
	homepageType,
	aboutPageType,
	contactPageType,
	roomsPageType,
	experiencesPageType,
	toursPageType,
	projectsPageType,
	amenityType,
	roomType,
	pageIntroSectionType,
	splitContentSectionType,
	stepsSectionType,
	featureRowsSectionType,
	customTravelPageType,
];
