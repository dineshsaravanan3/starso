const stringUtils = require('./string');

module.exports = {
  slugify: stringUtils.slugify,
  smartTrim: stringUtils.smartTrim,
  maskphone: stringUtils.maskphone,
  maskmail: stringUtils.maskmail
};