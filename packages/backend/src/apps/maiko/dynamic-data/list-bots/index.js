export default {
    name: 'List bots',
    key: 'listBots',
  
    async run($) {
      const response = await $.http.get('/api/getAssistantList');
  
      const bots = response.data.data.map((bot) => {
        return {
          value: bot.id,
          name: bot.name,
        };
      });
  
      return { data: bots };
    },
  };
  