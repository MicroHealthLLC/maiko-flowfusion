import axios from 'axios';

export default {
    name: 'List bots',
    key: 'listBots',
  
    async run($) {    
      const { host } = $.auth.data;
      const response = await axios.get(`${process.env.MAIKO_URL}/api/getAssistantList`);

      const data = response.data;
      const bots = data.map((bot) => ({
          value: bot.id,
          name: bot.name,
      }));
  
      return { data: bots };
    },
  };
  