import Dexie from 'dexie'
import { MuCategory, Tables } from '../../model'

const dbName = 'wen_chan_db'

class DataBase extends Dexie {
  [Tables.category]!: Dexie.Table<MuCategory>
  constructor() {
    super(dbName)
    this.version(1).stores({
      [Tables.category]: '++id,title'
    })
  }
}

const db = new DataBase()

export { Dexie, dbName, DataBase, db }
