import verifyCredentials from './verify-credentials.js';
import isStillVerified from './is-still-verified.js';

export default {
    fields: [
      {
        key: 'username',
        label: 'Username',
        type: 'string',
        required: true,
        readOnly: false,
        value: null,
        placeholder: 'Enter your Wazuh username',
        description: 'Username for Wazuh authentication.',
        clickToCopy: false,
      },
      {
        key: 'password',
        label: 'Password',
        type: 'string',
        required: true,
        readOnly: false,
        value: null,
        placeholder: 'Enter your Wazuh password',
        description: 'Password for Wazuh authentication.',
        clickToCopy: false,
      },
      {
        key: 'host',
        label: 'Host',
        type: 'string',
        required: true,
        readOnly: false,
        value: null,
        placeholder: 'Enter your Wazuh host IP',
        description: 'Host IP for Wazuh API. EX: 192.111.22.33',
        clickToCopy: false,
      },
    ],
    verifyCredentials,
    isStillVerified,
  };
  