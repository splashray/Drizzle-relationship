const { pgTable, serial, varchar, timestamp } = require("drizzle-orm/pg-core");
const { genderEnum, accountTypeEnum, adminRoleEnum } = require("./enums"); // enum is imported directly

const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  profilePicture: varchar("profile_picture", { length: 255 }).default("https://res.cloudinary.com/dsffatdpd/image/upload/v1685691602/baca/logo_aqssg3.jpg"),
  genderType: genderEnum("gender_type"),

  accountType: accountTypeEnum("account_type").notNull(),
  adminRole: adminRoleEnum("admin_role").notNull(),

  refreshToken: varchar("refresh_token", { length: 255 }),
  currentSessionToken: varchar("current_session_token", { length: 255 }),

  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
  deletedAt: timestamp("deletedAt"),

});


// Ensure you export all models and relations
module.exports = {
  admins,
};
