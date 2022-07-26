module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/reviews',
      handler: 'Review.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/reviews/:id',
      handler: 'Review.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/reviews',
      handler: 'Review.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/reviews/:id',
      handler: 'Review.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/reviews/:id',
      handler: 'Review.delete',
      config: { policies: [] }
    }
  ]
}