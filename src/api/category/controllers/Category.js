	// path: ./src/api/category/controllers/category.js

	const { createCoreController } = require('@strapi/strapi').factories;

	module.exports = createCoreController('api::category.category');
