const { pgTable, serial, boolean, integer, timestamp } = require("drizzle-orm/pg-core");

const { relations } = require("drizzle-orm");

const ownersProfileCheckLists = pgTable("ownersProfileCheckLists", {
  id: serial("id").primaryKey(),
  ownerId: integer("owner_id")
    .notNull()
    .references(() => require("./owners").owners.id), 
   
  finishTourGuide: boolean("finish_tour_guide").notNull().default(false),
  addAnyFirstHotel: boolean("add_first_hotel").notNull().default(false),

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
