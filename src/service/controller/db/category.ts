import { Dexie, dbName } from './base'

interface Category {
  id?: number
  name: string
}

class CategoryDB extends Dexie {
  category!: Dexie.Table<Category>
  constructor() {
    super(dbName)
    this.version(1).stores({
      category: '++id,name'
    })
  }
}

const categoryStore = new CategoryDB()
export { categoryStore }
