import { db } from './db'
import { Tables } from '../model'

export async function saveStore<T extends object>(tableName: Tables, datas: T, id?: number) {
  if (id) {
    const ret = await db.table(tableName).update(id, datas)
    return ret
  } else {
    const ret = await db.table(tableName).add(datas)
    return ret
  }
}

export async function deleteStore(tableName: Tables, id: number) {
  const ret = await db.table(tableName).delete(id)
  return ret
}

export async function getStore<T>(tableName: Tables, key: number) {
  const ret = await db.table(tableName).get(key)
  return ret as T
}

export async function getAllStore<T>(tableName: Tables) {
  const ret = await db.table(tableName).toArray()
  return ret as T[]
}

export async function filterStore<T>(
  tableName: Tables,
  filterHelper: (val?: T) => boolean = () => true,
  offset = 0,
  limit = 10
) {
  const ret = await db
    .table(tableName)
    .orderBy('id')
    .filter(filterHelper)
    .offset(offset)
    .limit(limit)
    .toArray()
  return ret as T[]
}
