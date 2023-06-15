const { pgTable, serial, varchar, boolean, integer, timestamp } = require("drizzle-orm/pg-core");
const { authTypeEnum, genderEnum, accountTypeEnum } = require("./enums"); // enum is imported directly

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 255 }).notNull(),
  authType: authTypeEnum("auth_type").notNull(),
  password: varchar("password", { length: 255 }),
  googleUUID: varchar("google_uuid", { length: 255 }),
  profilePicture: varchar("profile_picture", { length: 255 }).default("https://res.cloudinary.com/dsffatdpd/image/upload/v1685691602/baca/logo_aqssg3.jpg"),
  genderType: genderEnum("gender_type"),
  address: varchar("address", { length: 255 }),
  starLevel: integer("star_level").notNull().default(0),

  accountType: accountTypeEnum("account_type").notNull(),
  isVerified: boolean("is_verified").notNull().default(false),
  newsletterSubscription: boolean("newsletter_subscription").notNull().default(false),
  termsAndCondition: boolean("terms_and_condition").notNull().default(false),

  refreshToken: varchar("refresh_token", { length: 255 }),
  passwordRecoveryToken: varchar("password_recovery_token", { length: 255 }),
  passwordRecoveryTokenExpiresAt: timestamp("password_recovery_token_expires_at"),
  emailConfirmationToken: varchar("email_confirmation_token", { length: 255 }),
  emailConfirmationTokenExpiresAt: timestamp("email_confirmation_token_expires_at"), 

  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
  deletedAt: timestamp("deletedAt"),

});


// Ensure you export all models and relations
module.exports = {
  users,
};
