import defineApp from '../../helpers/define-app.js';
import auth from './auth/index.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'Wazuh',
  key: 'wazuh',
  iconUrl: '{BASE_URL}/apps/wazuh/assets/favicon.svg',
  authDocUrl: '{DOCS_URL}/apps/wazuh/connection',
  supportsConnections: true,
  baseUrl: '',
  apiBaseUrl: '',
  primaryColor: '000000',
  auth,
  actions,
});
