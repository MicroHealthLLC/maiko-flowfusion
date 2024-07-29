import defineApp from '../../helpers/define-app.js';
import actions from './actions/index.js';
import dynamicData from './dynamic-data/index.js';

export default defineApp({
  name: 'Maiko Bots',
  key: 'maiko',
  iconUrl: '{BASE_URL}/apps/maiko/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: false,
  baseUrl: process.env.MAIKO_URL,
  apiBaseUrl: process.env.MAIKO_URL,
  primaryColor: '000000',
  actions,
  dynamicData,
});
