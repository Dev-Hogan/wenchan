import { Note, Tables } from '@/service/model'
import { saveStore, deleteStore, filterStore } from '@/service/controller'
import { Pagination } from './utils'

type NoteOption = {
  tagId?: number
  categoryId?: number
}
type GetAllNoteOption = NoteOption & Pagination
export async function searchNote(option: GetAllNoteOption) {
  const { tagId, categoryId, pageNo = 0, pageSize = 10 } = option

  const ret = await filterStore<Note>(
    Tables.note,
    (d) => d?.tagId === tagId || d?.categoryId === categoryId,
    pageNo,
    pageSize
  )
  return ret
}

type SaveNote = NoteOption & {
  id?: number
  content: string
}
export async function saveNote(option: SaveNote) {
  await saveStore<Note>(Tables.note, option, option?.id)
}

export async function deleteNote(id: number) {
  const ret = await deleteStore(Tables.note, id)
  return ret
}
