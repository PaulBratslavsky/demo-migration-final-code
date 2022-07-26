module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/footer',
      handler: 'footer.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/footer',
      handler: 'footer.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/footer',
      handler: 'footer.delete',
      config: { policies: [] }
    }
  ]
}