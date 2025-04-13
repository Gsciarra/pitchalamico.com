import {
  integer,
  pgTable,
  text,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";

const baseTableData = {
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
};

export const eventsTable = pgTable(
  "events",
  {
    ...baseTableData,
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 100 }).notNull(),
    description: text("description"),
    startAt: timestamp("start_at", { withTimezone: true }).notNull(),
    endAt: timestamp("end_at", { withTimezone: true }).notNull(),
    location: integer()
      .references(() => locationsTable.id)
      .notNull(),
    createdBy: varchar({ length: 255 })
      .references(() => usersTable.id)
      .notNull(),
  },
  (table) => ({
    startAtIdx: index("events_start_at_idx").on(table.startAt),
  }),
);

export const locationsTable = pgTable("locations", {
  ...baseTableData,
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  address: text("address").notNull(),
});

export const usersTable = pgTable("users", {
  ...baseTableData,
  id: varchar({ length: 255 }).primaryKey().notNull(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
});
