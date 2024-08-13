import verifyCredentials from './verify-credentials.js';
import isStillVerified from './is-still-verified.js';

export default {
    fields: [
      {
        key: 'host',
        label: 'Host',
        type: 'string',
        required: true,
        readOnly: false,
        value: null,
        placeholder: 'Enter your MAIKO host IP',
        description: 'Host IP for MAIKO. EX: 192.111.22.33:3000',
        clickToCopy: false,
      },
    ],
    verifyCredentials,
    isStillVerified,
  };
  