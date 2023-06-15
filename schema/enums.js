// Define all enums in this file
// Enums can be imported directly from this file
// All enums must be in lowercase

const { pgEnum } = require("drizzle-orm/pg-core");

//lowercase
const authTypeEnum = pgEnum("auth_type", ["Form", "Google"]);
//lowercase
const genderEnum = pgEnum("gender_type", ["Male","Female","Non-binary", "Prefer not to say"]);
//uppercase
const accountTypeEnum = pgEnum("account_type", ["User", "Owner","Admin"]);
//
const adminRoleEnum = pgEnum("admin_role", ["Support", "Developer","Admin", "Super_admin"]);

module.exports = {
  authTypeEnum, genderEnum, accountTypeEnum, adminRoleEnum
};
