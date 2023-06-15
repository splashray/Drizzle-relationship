const { pgTable, serial, boolean, integer, timestamp } = require("drizzle-orm/pg-core");

const { relations } = require("drizzle-orm");

const ownersProfileCheckLists = pgTable("ownersProfileCheckLists", {
  id: serial("id").primaryKey(),
  ownerId: integer("owner_id")
    .notNull()
    .references(() => require("./owners").owners.id), 
 
  addAnyFirstHotel: boolean("add_first_hotel").notNull().default(false),
  promoteAnyFirstHotel: boolean("promote_any_first_hotel").notNull().default(false),
  modifyAnyFirstHotelRoom: boolean("modify_any_first_hotel_room").notNull().default(false),
  addAnyFirstBankDetails: boolean("add_any_first_bank_details").notNull().default(false),
  placeAnyFirstWithdrawal: boolean("place_any_first_withdrawal").notNull().default(false),

  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
  deletedAt: timestamp("deletedAt"),
});

const ownersProfileCheckListRelations = relations(ownersProfileCheckLists, ({ one }) => {
  const { owners } = require("./owners");
  return {
    owner: one(owners, {
      fields: [ownersProfileCheckLists.ownerId],
      references: [owners.id],
    }),  
  };
});


// Ensure you export all models and relations
module.exports = {
  ownersProfileCheckLists,
  ownersProfileCheckListRelations,
};
