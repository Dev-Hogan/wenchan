import { supabase } from './base'
import { Tables } from '@/models'

export async function getAllTag() {
  return (await supabase.from(Tables.category).select('name'))
}
