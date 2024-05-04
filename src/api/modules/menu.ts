import { saveStore, getStore, deleteStore, getAllStore } from '@/service/controller'
import { MuCategory, Tables } from '@/service/model'
export async function saveMuCategory({
  val = '未命名分类',
  id = undefined
}: {
  val?: string
  id?: number
}) {
  const ret = await saveStore<MuCategory>(Tables.category, { title: val, id, icon: 'ask1' }, id)
  return ret
}

export async function getMuCategory(id: number) {
  const ret = await getStore<MuCategory>(Tables.category, id)
  return ret
}

export async function getAllMuCategory() {
  const ret = await getAllStore<MuCategory>(Tables.category)
  return ret
}

export async function deleteMuCategory(id: number) {
  const ret = await deleteStore(Tables.category, id)
  return ret
}
