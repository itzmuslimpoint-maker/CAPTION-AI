import { createClient } from '@supabase/supabase-js';

// Use environment variables if available, otherwise fallback to provided values
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://mioyljnipvnpzessjzmh.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_nTTxGiJYoNy22RvDgkOw8Q_bGHkN7Kn';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase configuration is missing. The app may not function correctly.');
}

// Ensure we don't pass an empty string to createClient which causes the crash
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder'
);
