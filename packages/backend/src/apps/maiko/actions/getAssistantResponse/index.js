import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Get Response from Maiko Assistant',
  key: 'getBotResponse',
  description: 'Have a question answered by a Maiko Assistant.',
  arguments: [
    {
      label: 'Bot Name',
      key: 'botId',
      type: 'dropdown',
      required: true,
      variables: true,
      description: 'Select a Maiko Assistant to answer your question.',
      source: {
        type: 'query',
        name: 'getDynamicData',
        arguments: [
          {
            name: 'key',
            value: 'listBots',
          },
        ],
      },
    },
    {
      label: 'Question',
      key: 'query',
      type: 'string',
      required: true,
      variables: true,
      description: 'Type the question to send to Maiko.',
    },
  ],

  async run($) {
    const { host } = $.auth.data;
    const botId = $.step.parameters.botId;
    const requestPath = `${host}/api/query/${botId}`;
    const query = $.step.parameters.query;

    const headers = {
      'Content-Type': "application/json",
    };

    const response = await $.http.post(
      requestPath,
      { query: query },
      { headers }
    );

    $.setActionItem({ raw: response.data });
  },
});
