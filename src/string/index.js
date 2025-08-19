const slugify = require('./slugify');
const smartTrim = require('./smartTrim');
const {maskphone,maskmail} =require('./mask');

module.exports = {
  slugify,
  smartTrim,maskphone,maskmail
};