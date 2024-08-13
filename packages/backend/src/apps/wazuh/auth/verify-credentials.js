import axios from 'axios';
import https from 'https';

const verifyCredentials = async ($) => {
  const { username, password, host } = $.auth.data;

  try {
    // Authenticate and get JWT token
    const authResponse = await axios({
      method: 'post',
      url: `https://${host}:55000/security/user/authenticate`,
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username,
        password,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    const token = authResponse.data.data.token;

    // Verify credentials by making an authenticated request to Wazuh API
    await axios.get(`https://${host}:55000/manager/logs`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    // Set the auth fields
    await $.auth.set({
        username,
        password,
        host
      });
  } catch (error) {
    throw new Error('Verification failed: ' + error.message); 
  }
};

export default verifyCredentials;