import { db } from './db'
import { Tables } from '../model'

export async function batchSaveStore<T>(tableName: Tables, datas: T[]) {
  const ret = await db.table(tableName).bulkAdd(datas)
  return ret
}

export async function getStore<T>(tableName: Tables, keys: number[]) {
  const ret = await db.table(tableName).bulkGet(keys)
  return ret as T[]
}

export async function getAllStore<T>(tableName: Tables) {
    const ret = await db.table(tableName).toArray()
    return ret as T[]
}