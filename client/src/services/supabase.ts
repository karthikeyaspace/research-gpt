import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://txpjupgxqfaksnmjvpeq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cGp1cGd4cWZha3NubWp2cGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1ODE4MjcsImV4cCI6MjAzNjE1NzgyN30.if0I2fWt5DGYIinpy2RixGZPN5ZEdfPZLr9MWKSF1zg";

if (!supabaseKey) {
  throw new Error("SUPABASE_KEY is not defined");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
