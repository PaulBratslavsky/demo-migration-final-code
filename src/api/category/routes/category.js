	// path: ./src/api/category/routes/category.js

	const { createCoreRouter } = require('@strapi/strapi').factories;

	module.exports = createCoreRouter('api::category.category');