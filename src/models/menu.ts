import { Routes } from './enum'
import { Icon, IconMap } from '@/models'
export interface Menu {
  id?: number
  title?: string
  name?: Routes
  icon?: Icon
}

export type LevelIcon = keyof Pick<IconMap, 'ask1' | 'ask2' | 'ask3' | 'ask4'>
