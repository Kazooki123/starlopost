CREATE TABLE IF NOT EXISTS "user" (
	"_id" serial NOT NULL,
	"name" text,
	"role" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
