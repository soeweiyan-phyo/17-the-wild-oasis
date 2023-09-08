import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uudyqffguvaxudhsagng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1ZHlxZmZndXZheHVkaHNhZ25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNzExOTgsImV4cCI6MjAwOTc0NzE5OH0.1OljqYUON4Nz3woJYDvoPC6rE_QuZ9OUjkgbO8jBApk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
