import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/libs/supabase/database.types'

export type TypedSupabaseClient = SupabaseClient<Database>
