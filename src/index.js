'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */

  register({ strapi }) {
    const extensionService = strapi.service('plugin::graphql.extension');

    extensionService.use(({ strapi }) => ({
      typeDefs: `
          type Query {
              restaurants(
                  filters: RestaurantFiltersInput
                  pagination: PaginationArg = {}
                  sort: [String] = []
                  publicationState: PublicationState = LIVE
                  ): RestaurantEntityResponseCollection  
              }
          `,
      resolvers: {
        Query: {
          restaurants: {
            resolve: async (parent, args, context) => {
              const { toEntityResponseCollection } =
                strapi.service('plugin::graphql.format').returnTypes;
              const { transformArgs } = strapi.service('plugin::graphql.builders').utils;
              const contentType = strapi.contentTypes['api::restaurant.restaurant'];

              const transformedArgs = transformArgs(args, { contentType });

              const data = await strapi.entityService.findMany(
                'api::restaurant.restaurant',
                transformedArgs
              );

              const response = toEntityResponseCollection(data, {
                args: { transformedArgs, start: 0, limit: 10 },
                resourceUID: contentType.uid,
              });

              console.log('##################', response, '##################');
              return response;
            },
          },
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */

  bootstrap(/*{ strapi }*/) {},
};
