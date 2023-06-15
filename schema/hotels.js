const { relations } = require("drizzle-orm");
const { pgTable, serial, varchar, integer, timestamp } = require("drizzle-orm/pg-core");

const hotels = pgTable("hotels", {
  id: serial("id").primaryKey(),
  hotelName: varchar("hotel_name", { length: 255 }).notNull(),
  hotelEmail: varchar("hotel_email", { length: 255 }).notNull(),
  hotelOwnerId: integer("hotel_owner_id")
    .notNull()
    .references(() => require("./owners").owners.id), // Reference owners model without creating a circular dependency

  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
  deletedAt: timestamp("deletedAt"),
});

// This is how you define relations
const hotelsRelations = relations(hotels, ({ one }) => {
  // Import owners here to avoid circular dependency
  const { owners } = require("./owners");
  return {
    hotelOwner: one(owners, {
      fields: [hotels.hotelOwnerId],
      references: [owners.id],
    }),
  };
});

// Ensure you export all models and relations
module.exports = {
  hotels,
  hotelsRelations,
};
