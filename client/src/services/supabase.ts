import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://txpjupgxqfaksnmjvpeq.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

if (!supabaseKey) 
  throw new Error("SUPABASE_KEY is not defined");

export const supabase = createClient(supabaseUrl, supabaseKey);
