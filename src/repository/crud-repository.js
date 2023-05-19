class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async getAll(modelId) {
    try {
      const result = await this.model.findAll(modelId);
      return result;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }
  async get(id) {
    const result = await this.model.findByPk(id);
    return result;
  }
  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }
  async update(id, data) {
    try {
      const result = await this.model.findByPk(data, {
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }
  async destroy(id) {
    try {
      const result = await this.model.destroy({
        where:{
          id:id,
        }
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
