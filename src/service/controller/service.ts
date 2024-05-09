import { db } from './db'
import { Tables, SearchParameters } from '../model'
import dayjs from 'dayjs'

export async function saveStore<
  T extends {
    createTime?: string
    updateTime?: string
  }
>(tableName: Tables, datas: T, id?: number) {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
  if (id) {
    const ret = await db.table(tableName).update(id, { ...datas, updateTime: now })
    return ret
  } else {
    const ret = await db.table(tableName).add({ ...datas, createTime: now })
    return ret
  }
}

export async function deleteStore(tableName: Tables, ids: number[]) {
  const ret = await db.table(tableName).bulkDelete(ids)
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
  pageNo = 0,
  pageSize = 10
) {
  const ret = await db
    .table(tableName)
    .orderBy('id')
    .filter(filterHelper)
    .offset(pageNo * pageSize)
    .limit(pageSize)
    .toArray()
  return ret as T[]
}
export async function searchStore<T>(tableName: Tables, p?: SearchParameters<T>, all = false) {
  const fuzzyQuery = (d: any, KV: [string, any][]) => {
    for (const [key, value] of KV) {
      const reg = new RegExp(value)
      return reg.test(d[key])
    }
    return false
  }
  // let rootEntries: [string, any][] = []
  let entityEntries: [string, any][] = []
  if (p?.entity) {
    entityEntries = Object.entries(p.entity)
  }
  // if (p?.root) {
  //   rootEntries = Object.entries(p.root)
  // }
  const equalCollection = await db.table(tableName).filter((d) => {
    // if (rootEntries.length > 0) {
    //   return fuzzyQuery(d, rootEntries)
    // }
    if (entityEntries.length > 0) {
      return fuzzyQuery(d, entityEntries)
    }
    return true
  })

  if (all) {
    return (await equalCollection.toArray()) as T[]
  }

  return (await equalCollection
    .offset(p?.pageNo || 0 * (p?.pageSize || 10))
    .limit(p?.pageSize || 10)
    .toArray()) as T[]
}
