'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {

    // Using GraphQL or REST this returns just a normal ctx.params.id
    console.log(ctx.params)

    const { id } = ctx.params;

    const entity = await strapi.services.restaurant.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.restaurant });
  },

  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOneByUID(ctx) {

    // Using GraphQL this returns a _uid but with REST it returns uid????
    console.log(ctx.params)

    let { uid } = ctx.params;

    // Work around for GQL _uid
    if (ctx.params._uid) {
      uid = ctx.params._uid
    }

    const entity = await strapi.query('blog-post').findOne({ uid: uid });
    return sanitizeEntity(entity, { model: strapi.models['blog-post'] });
  },
};
