	// path: ./src/api/restaurant/routes/restaurant.js

	const { createCoreRouter } = require('@strapi/strapi').factories;

	module.exports = createCoreRouter('api::restaurant.restaurant');