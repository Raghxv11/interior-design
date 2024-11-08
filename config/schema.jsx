import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull().unique(),
    imageUrl: varchar("imageUrl").notNull(),
    credits: integer("credits").default(3)
});

export const generatedDesigns = pgTable("generatedDesigns", {
    id: serial("id").primaryKey(),
    roomType: varchar("roomType").notNull(),
    designType: varchar("designType").notNull(),
    originalImageUrl: varchar("originalImageUrl").notNull(),
    generatedImageUrl: varchar("generatedImageUrl").notNull(),
    userEmail: varchar("userEmail"),
});

