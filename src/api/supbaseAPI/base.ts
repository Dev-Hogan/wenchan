import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(import.meta.env.VITE_HOST, import.meta.env.VITE_PUBLIC_KEY)
