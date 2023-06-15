const enums = require("./enums");
const users = require("./users");
const owners = require("./owners");
const admins = require("./admin");
const hotels = require("./hotels");
const ownersProfileCheckLists = require("./ownersProfileCheckLists");
/**
 *  For every new model file, spread and export it here
 *  @todo create a script to auto-generate this file
 */
module.exports = {
  ...enums,
  ...users,
  ...owners,
  ...admins,
  ...hotels,
  ...ownersProfileCheckLists,
  
};
