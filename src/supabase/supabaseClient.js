import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL  = "https://ynfbmfrrtigsbbnllnjm.supabase.co"

const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluZmJtZnJydGlnc2JibmxsbmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzg0MzUsImV4cCI6MjAzMDc1NDQzNX0.0Z9CFkYhde79Il1BduDMXJUrs7_5ivoqZRNIWFOu5Jg"

// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
