CREATE INDEX concurrently IF NOT EXISTS idx_sessions_sessions_date ON "public"."sessions" (session_date); -- използваме базата докато индекса се създава

--CREATE INDEX ON "public"."sessions" USING btree ("session_date");
