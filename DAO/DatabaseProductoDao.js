class DatabaseProductoDao {
  constructor() {}

  async addPersistenceProducto(dataToDb) {
    try {
    } catch (error) {}
  }

  async findAllPersistenceProducto() {
    try {
    } catch (error) {}
  }

  async findByIDPersistenceProducto(_id) {
    try {
    } catch (error) {}
  }

  async deletePersistenceProducto(_id) {
    try {
    } catch (error) {}
  }

  async updatePersistenceProducto(_id, data) {
    try {
    } catch (error) {}
  }

  static getInstance(){
    if(!instance){
      instance = new DatabaseProductoDao()
    }
    return instance
  }

}

module.exports = DatabaseProductoDao;
