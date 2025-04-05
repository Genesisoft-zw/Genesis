import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bomssgdwfmobucejypoy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvbXNzZ2R3Zm1vYnVjZWp5cG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDQzNzAsImV4cCI6MjA1NjgyMDM3MH0.a8xjZMi4DR3mYjrmrkbcrpy51FacXJQ9uD0ehxc6pDA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);