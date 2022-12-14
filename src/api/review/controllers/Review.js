	// path: ./src/api/review/controllers/review.js

	const { createCoreController } = require('@strapi/strapi').factories;

	module.exports = createCoreController('api::review.review');

// module.exports = {
//   create: async (ctx) => {
//     // Set the reviewer ID as author key based on the login user info.
//     // https://strapi.io/documentation/3.x.x/guides/authentication.html#user-object-in-strapi-context
//     try {
//       ctx.request.body.author = ctx.state.user.id
//     } catch (err) {
//       return ctx.badRequest(null, 'Can\'t find authenticated user ID');
//     }

//     if (!ctx.request.body.review) {
//       return ctx.badRequest(null, '`review` attribute is missing');
//     }

//     if (!ctx.request.body.note) {
//       return ctx.badRequest(null, '`note` attribute is missing');
//     }

//     try {
//       ctx.request.body.note = parseInt(ctx.request.body.note);
//     } catch (err) {
//       return ctx.badRequest(null, '`note` attribute have to be an integer');
//     }

//     if (ctx.request.body.note < 0 || ctx.request.body.note > 5) {
//       return ctx.badRequest(null, '`note` attribute have to be between 0 and 5');
//     }

//     return strapi.api.review.services.review.create(ctx.request.body);
//   }
// };
