	// path: ./src/api/like/routes/like.js

	const { createCoreRouter } = require('@strapi/strapi').factories;

	module.exports = createCoreRouter('api::like.like');