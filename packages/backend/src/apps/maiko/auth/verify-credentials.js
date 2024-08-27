import axios from 'axios';

const verifyCredentials = async ($) => {
  const { host } = $.auth.data;

  const response = await axios.get(`${process.env.MAIKO_URL}/api/getAssistantList`);
        
  if (response.status !== 200) {
      throw new Error('Network response was not ok');
  }

    // Set the auth fields
  await $.auth.set({
    host
  });
};

export default verifyCredentials;