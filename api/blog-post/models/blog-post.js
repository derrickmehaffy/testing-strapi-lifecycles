'use strict';

const uuid = require('uuid');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      console.log('Before ' + data.uid)
      data.uid = uuid();
      console.log('After ' + data.uid)
    }
  }
};
