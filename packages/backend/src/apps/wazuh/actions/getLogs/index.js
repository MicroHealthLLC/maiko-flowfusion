import defineAction from '../../../../helpers/define-action.js';
import axios from 'axios';
import https from 'https';

export default defineAction({
  name: 'Get Wazuh Logs',
  key: 'getLogs',
  description: 'Get the latest 2000 logs from Wazuh.',

  async run($) {
    const { username, password, host } = $.auth.data;

    try {
      // Step 1: Authenticate and get JWT token
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

      // Step 2: Fetch the latest 2000 logs
      const logsResponse = await axios.get(`https://${host}:55000/manager/logs`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      });

      // Combine all the logs into one giant string including timestamp, tag, level, and description
      const summary = logsResponse.data.data.affected_items.map(item =>
        `Timestamp: ${item.timestamp}, Tag: ${item.tag}, Level: ${item.level}, Description: ${item.description}`
      ).join('; ');

      // Append the summary property to the data object
      logsResponse.data.data.summary = summary;

      // Set the action item with the response data
      $.setActionItem({ raw: logsResponse.data });
    } catch (error) {
      throw new Error('Failed to get logs: ' + error.message);
    }
  },
});