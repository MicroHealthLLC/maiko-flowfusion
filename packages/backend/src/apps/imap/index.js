import defineApp from '../../helpers/define-app.js';
import auth from './auth/index.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'IMAP',
  key: 'imap',
  iconUrl: '{BASE_URL}/apps/imap/assets/favicon.svg',
  authDocUrl: '{DOCS_URL}/apps/imap/connection',
  supportsConnections: true,
  baseUrl: '',
  apiBaseUrl: '',
  primaryColor: '2DAAE1',
  auth,
  actions,
});
