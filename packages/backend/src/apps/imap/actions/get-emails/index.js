import defineAction from '../../../../helpers/define-action.js';
import transporter from '../../common/transporter.js';

export default defineAction({
  name: 'Get Emails',
  key: 'getEmails',
  description: 'Get emails received since given date.',
  arguments: [
    {
      label: 'Date',
      key: 'date',
      type: 'string',
      required: false,
      description: 'Get all emails received since this date. Format is year-month-day: 2023-10-01',
      variables: true,
    },
  ],

  async run($) {    
    // Example usage: Fetch unseen emails from October 1, 2023
    const messages = fetchUnseenEmailsFromDate(new Date(`${$.step.parameters.date}`)).catch(console.error);

    $.setActionItem({ raw: messages });
  },
});

async function fetchUnseenEmailsFromDate(date) {    
    try {
        await transporter.connect();

        // Select inbox
        await transporter.mailboxOpen('INBOX');

        // Format the date to the required format (DD-MMM-YYYY)
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).replace(/ /g, '-').toUpperCase();

        // Search for unseen emails from the given date
        const searchCriteria = [
            'UNSEEN',
            ['SINCE', formattedDate]
        ];

        const messages = await transporter.search(searchCriteria);

        // Fetch and process the messages
        for await (let message of transporter.fetch(messages, { envelope: true })) {
          return message.envelope;
        }

    } catch (error) {
        console.error('Error fetching emails:', error);
    } finally {
        await transporter.logout();
    }
}
