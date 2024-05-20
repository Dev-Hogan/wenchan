import { deleteNote } from '@/api'
export async function handleDeleteNote(ids: number[]) {
  await deleteNote(ids)
}
