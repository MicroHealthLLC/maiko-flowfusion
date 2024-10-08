import defineApp from '../../helpers/define-app.js';
import actions from './actions/index.js';
import auth from './auth/index.js';
import dynamicData from './dynamic-data/index.js';

export default defineApp({
  name: 'Maiko Bots',
  key: 'maiko',
  iconUrl: '{BASE_URL}/apps/maiko/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: true,
  baseUrl: '',
  apiBaseUrl: '',
  primaryColor: '000000',
  auth,
  actions,
  dynamicData,
});
