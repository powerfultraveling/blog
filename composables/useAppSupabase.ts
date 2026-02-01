import type { Database } from '@/libs/supabase/database.types'

export const useAppSupabase = () => {
  return useSupabaseClient<Database>()
}
