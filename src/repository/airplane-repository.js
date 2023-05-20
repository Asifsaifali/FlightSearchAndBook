const { Airplane } = require("../models/index");
const {Op}=require('sequelize')

class AirplaneRepository {
  async createAirplane({ name }) {
    try {
      const airplane = await Airplane.create({
        name,
      });
      return airplane;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      await Airplane.destroy({
        where: {
          id: airplaneId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async updateAirplane(airplaneId, data) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      airplane.name = data.name;
      await airplane.save();
      return airplane;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async getAllAirplane(filter) {
    try {
      if (filter.name) {
        const airplane = await Airplane.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airplane;
      }
      const airplane = await Airplane.findAll();
      return airplane;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
