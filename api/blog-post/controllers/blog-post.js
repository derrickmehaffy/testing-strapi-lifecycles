'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOneByUID(ctx) {
    const { uid } = ctx.params;

    const entity = await strapi.query('blog-post').findOne({ uid: uid });
    return sanitizeEntity(entity, { model: strapi.models['blog-post'] });
  },
};
