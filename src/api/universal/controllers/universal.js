	// path: ./src/api/universal/controllers/universal.js

	const { createCoreController } = require('@strapi/strapi').factories;

	module.exports = createCoreController('api::universal.universal');