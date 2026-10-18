import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./auth-config.js";

const isConfigured =
  /^https:\/\/[a-zA-Z0-9-]+\.supabase\.co$/.test(SUPABASE_URL) &&
  !SUPABASE_URL.includes("YOUR_PROJECT_REF") &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_ANON_KEY.includes("YOUR_SUPABASE");

export const authConfigured = Boolean(isConfigured);
export const supabase = authConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;
