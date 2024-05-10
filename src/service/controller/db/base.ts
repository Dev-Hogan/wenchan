import Dexie from 'dexie'
import { MuCategory, Note, Tables, Tag } from '../../model'
import { tagsMock, categoryMock } from '@/mock'
import dayjs from 'dayjs'
const dbName = 'wen_chan_db'

class DataBase extends Dexie {
  [Tables.category]!: Dexie.Table<MuCategory>;
  [Tables.note]!: Dexie.Table<Note>;
  [Tables.tag]!: Dexie.Table<Tag>
  constructor() {
    super(dbName)
    this.version(1).stores({
      [Tables.category]: '++id,title,createTime,updateTime',
      [Tables.note]: '++id,content,categoryId,tagId,isFocused,isDeleted,createTime,updateTime',
      [Tables.tag]: '++id,categoryId,tagId,isFocused,name,charsCount,createTime,updateTime'
    })
  }
}

const db = new DataBase()

function initDB(tableNames?: { name: Tables; data: any[] }[]) {
  tableNames?.forEach(async (d) => {
    const datas = await db.table(d.name).toArray()
    if (datas && datas.length === 0) {
      await db.table(d.name).bulkAdd(d.data)
    }
  })
}
initDB([
  {
    name: Tables.tag,
    data: addCreateTime(tagsMock)
  },
  {
    name: Tables.category,
    data: addCreateTime(categoryMock)
  }
])

function addCreateTime(datas: any[]) {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
  return datas.map((d) => ({ ...d, createTime: now }))
}
export { Dexie, dbName, DataBase, db }
