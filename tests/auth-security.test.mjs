import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("browser Supabase configuration contains placeholders, not credentials", async () => {
  const config = await read("../auth-config.js");
  assert.match(config, /YOUR_PROJECT_REF/);
  assert.match(config, /YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY/);
  assert.doesNotMatch(config, /SUPABASE_(?:SERVICE_ROLE|SECRET_KEY)=/i);
});

test("Supabase client validates project URL and safely disables invalid configuration", async () => {
  const client = await read("../auth-client.js");
  assert.ok(client.includes("YOUR_PROJECT_REF"));
  assert.ok(client.includes("YOUR_SUPABASE"));
  assert.match(client, /export const authConfigured = Boolean\(isConfigured\)/);
  assert.match(client, /createClient\(SUPABASE_URL, SUPABASE_ANON_KEY/);
  assert.match(client, /persistSession: true/);
});

test("example profile schema enables RLS and owner-only access", async () => {
  const schema = await read("../supabase/schema.sql");
  assert.match(schema, /enable row level security/i);
  assert.match(schema, /force row level security/i);
  assert.match(schema, /auth\.uid\(\)\) = id/);
  assert.match(schema, /with check/);
});
