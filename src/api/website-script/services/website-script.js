'use strict';

/**
 * website-script service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-script.website-script');
