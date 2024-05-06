import Dexie from 'dexie'
import { MuCategory, Note, Tables, Tag } from '../../model'

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

export { Dexie, dbName, DataBase, db }
