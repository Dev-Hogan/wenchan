import Dexie from 'dexie'
import { MuCategory, Note, Tables } from '../../model'

const dbName = 'wen_chan_db'

class DataBase extends Dexie {
  [Tables.category]!: Dexie.Table<MuCategory>;
  [Tables.note]!: Dexie.Table<Note>
  constructor() {
    super(dbName)
    this.version(1).stores({
      [Tables.category]: '++id,title',
      [Tables.note]: '++id,content,categoryId,tagId'
    })
  }
}

const db = new DataBase()

export { Dexie, dbName, DataBase, db }
