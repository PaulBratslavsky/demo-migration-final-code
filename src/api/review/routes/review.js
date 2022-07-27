	// path: ./src/api/review/routes/review.js

	const { createCoreRouter } = require('@strapi/strapi').factories;

	module.exports = createCoreRouter('api::review.review');