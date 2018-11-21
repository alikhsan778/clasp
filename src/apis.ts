/**
 * Google API Types
 */

/**
 * Different types of starter script templates.
 * Technically, a script can be multiple types (e.g. Slides add-on/API),
 * but it's pretty rare that anyone wants that.
 */
export enum SCRIPT_TYPES {
  STANDALONE = 'standalone',
  DOCS = 'docs',
  SHEETS = 'sheets',
  SLIDES = 'slides',
  FORMS = 'forms',
  WEBAPP = 'webapp',
  API = 'api',
}

// Also see:
// https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/appsscript.json
export interface AdvancedService {
  userSymbol: string;
  serviceId: string;
  version: string;
}

/**
 * This is a list of all public Advanced Services.
 *
 * It was generated by:
 * 1. script.google.com/create
 * 1. Resources > Advanced Google Services
 * 1. Enable all services
 * 1. View > Show manifest file
 * 1. View appsscript.json
 */
export const PUBLIC_ADVANCED_SERVICES: AdvancedService[] = [{
  userSymbol: 'Classroom',
  serviceId: 'classroom',
  version: 'v1',
}, {
  userSymbol: 'Tasks',
  serviceId: 'tasks',
  version: 'v1',
}, {
  userSymbol: 'BigQuery',
  serviceId: 'bigquery',
  version: 'v2',
}, {
  userSymbol: 'PlusDomains',
  serviceId: 'plusDomains',
  version: 'v1',
}, {
  userSymbol: 'DoubleClickCampaigns',
  serviceId: 'dfareporting',
  version: 'v3.2',
}, {
  userSymbol: 'YouTube',
  serviceId: 'youtube',
  version: 'v3',
}, {
  userSymbol: 'FusionTables',
  serviceId: 'fusiontables',
  version: 'v2',
}, {
  userSymbol: 'Drive',
  serviceId: 'drive',
  version: 'v2',
}, {
  userSymbol: 'AdminLicenseManager',
  serviceId: 'licensing',
  version: 'v1',
}, {
  userSymbol: 'Mirror',
  serviceId: 'mirror',
  version: 'v1',
}, {
  userSymbol: 'AnalyticsReporting',
  serviceId: 'analyticsreporting',
  version: 'v4',
}, {
  userSymbol: 'AdminDirectory',
  serviceId: 'admin',
  version: 'directory_v1',
}, {
  userSymbol: 'AdminReports',
  serviceId: 'admin',
  version: 'reports_v1',
}, {
  userSymbol: 'Gmail',
  serviceId: 'gmail',
  version: 'v1',
}, {
  userSymbol: 'AdSense',
  serviceId: 'adsense',
  version: 'v1.4',
}, {
  userSymbol: 'TagManager',
  serviceId: 'tagmanager',
  version: 'v2',
}, {
  userSymbol: 'Plus',
  serviceId: 'plus',
  version: 'v1',
}, {
  userSymbol: 'AdminGroupsMigration',
  serviceId: 'groupsmigration',
  version: 'v1',
}, {
  userSymbol: 'Slides',
  serviceId: 'slides',
  version: 'v1',
}, {
  userSymbol: 'Sheets',
  serviceId: 'sheets',
  version: 'v4',
}, {
  userSymbol: 'ShoppingContent',
  serviceId: 'content',
  version: 'v2',
}, {
  userSymbol: 'Calendar',
  serviceId: 'calendar',
  version: 'v3',
}, {
  userSymbol: 'AdminReseller',
  serviceId: 'reseller',
  version: 'v1',
}, {
  userSymbol: 'YouTubeAnalytics',
  serviceId: 'youtubeAnalytics',
  version: 'v1',
}, {
  userSymbol: 'UrlShortener',
  serviceId: 'urlshortener',
  version: 'v1',
}, {
  userSymbol: 'AppsActivity',
  serviceId: 'appsactivity',
  version: 'v1',
}, {
  userSymbol: 'YouTubeContentId',
  serviceId: 'youtubePartner',
  version: 'v1',
}, {
  userSymbol: 'AdminGroupsSettings',
  serviceId: 'groupssettings',
  version: 'v1',
}, {
  userSymbol: 'Analytics',
  serviceId: 'analytics',
  version: 'v3',
}];