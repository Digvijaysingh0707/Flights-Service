const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async detry(data) {
    try {
      const response = await this.model.create({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: destroy");
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: get");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: findAll");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await this.model.Update(data, { where: { id: id } });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: findAll");
      throw error;
    }
  }
}

module.exports = CrudRepository;
