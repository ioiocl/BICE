exports.addCarSchema = {
  description: 'Create a new stock',
  tags: ['quotes'],
  summary: 'get cooper values',
  body: {
    type: 'object',
    properties: {
      symbol: { type: 'string' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        date: { type: 'string' },
        spot: { type: 'number' },
        sma5: { type: 'number' },
        sma15: { type: 'number' }
      }
    }
  }
}
