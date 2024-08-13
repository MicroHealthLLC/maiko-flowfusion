import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Get spreadsheet',
  key: 'getSpreadsheet',
  description:
    'Get a spreadsheet.',
  arguments: [
    {
      label: 'Spreadsheet to get',
      key: 'spreadsheetId',
      type: 'dropdown',
      required: false,
      description: 'Choose a spreadsheet to get its data.',
      variables: true,
      source: {
        type: 'query',
        name: 'getDynamicData',
        arguments: [
          {
            name: 'key',
            value: 'listSpreadsheets',
          },
        ],
      },
    },
  ],

  async run($) {
    const { data } = await $.http.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${$.step.parameters.spreadsheetId}`
    );

    $.setActionItem({
      raw: data,
    });
  },
});
