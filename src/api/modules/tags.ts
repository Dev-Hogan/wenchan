import { Tag, Tables } from '@/service/model'
import { saveStore, getStore, deleteStore, getAllStore } from '@/service/controller'

export async function getAllTags() {
  const ret = await getAllStore<Tag>(Tables.tag)
  return ret
}

export async function getTag(id: number) {
  const ret = await getStore<Tag>(Tables.tag, id)
  return ret
}

export async function deleteTag(ids: number[]) {
  const ret = await deleteStore(Tables.tag, ids)
  return ret
}

export async function saveTag(option: Tag) {
  const ret = await saveStore<Tag>(Tables.tag, option, option?.id)
  return ret
}
