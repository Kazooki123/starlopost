import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("_id"),
  name: text("name"),
  role: text("role").$type<"admin" | "users">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
