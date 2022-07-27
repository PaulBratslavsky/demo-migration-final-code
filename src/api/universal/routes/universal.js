	// path: ./src/api/universal/routes/universal.js

	const { createCoreRouter } = require('@strapi/strapi').factories;

	module.exports = createCoreRouter('api::universal.universal');