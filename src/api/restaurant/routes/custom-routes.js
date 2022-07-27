module.exports = {
    routes: [
      { 
        method: 'GET',
        path: '/restaurants/with-meta-date',
        handler: 'restaurant.findCustomRoute',
      },
    ]
  }