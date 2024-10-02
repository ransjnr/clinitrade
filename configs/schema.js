import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carLisiting", {
  id: serial("id").primaryKey(),
  instrumentTitle: varchar("instrumentTitle"),
  tagline: varchar("tagline"),
  originalPrice: varchar("originalPrice"),
  sellingPrice: varchar("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition").notNull(),
  manufacturer: varchar("manufacturer").notNull(),
  model: varchar("model").notNull(),
  year: varchar("year").notNull(),
  powerSupply: varchar("powerSupply").notNull(),
  operationType: varchar("operationType").notNull(),
  safetyCertifications: varchar("safetyCertifications").notNull(),
  functionality: varchar("functionality").notNull(),
  dimension: varchar("dimension"),
  weight: varchar("weight"),
  color: varchar("color").notNull(),
  serialNumber: varchar("serialNumber").notNull(),
  listingType: varchar("listingType"),
  vin: varchar("vin"),
  listingDescription: varchar("listingDescription").notNull(),
  features: json("features"),
  createdBy: varchar("createdBy").notNull(),
  userName: varchar("userName").notNull().default("Tubeguruji"),
  userImageUrl: varchar("userImageUrl").default(
    "https://www.tubeguruji.com/_next/image?url=%2Flogo2.jpg&w=128&q=75"
  ),
  postedOn: varchar("postedOn"),
});

export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(),
  imageUrl: varchar("imageUrl").notNull(),
  carListingId: integer("carListingId")
    .notNull()
    .references(() => CarListing.id),
});
