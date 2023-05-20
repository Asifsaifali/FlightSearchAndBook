const {Op}=require('sequelize');

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async getAll(filter) {
    try {
      if(filter.name){
        const result = await this.model.findAll({
          where:{
            name:{
              [Op.startsWith]:filter.name
             }
            }
          });
        return result;
      }
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  }
  async get(id) {
    try {
      const result = await this.model.findByPk(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in repository");
      throw { error };
    }
  
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
  async update(Id, data) {
    try {
      const result = await this.model.findByPk(data, {
        where: {
          id: Id,
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
