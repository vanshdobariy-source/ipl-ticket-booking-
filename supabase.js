import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fkmdbkqaeyfvmwtdofxk.supabase.co";
const supabaseKey = "sb_publishable_LOIjrEn-QHoed0PDDJe99A_T_dYYQG6";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);