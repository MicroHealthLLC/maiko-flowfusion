import defineAction from '../../../../helpers/define-action.js';
import getAssistants from '../../common/getAssistants.js';

const assistants = await getAssistants();

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
      options: assistants,
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
    const botId = $.step.parameters.botId;
    const requestPath = `/api/query/${botId}`;
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
