const { AirplaneRepository } = require("../repository/index");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) {
    try {
      const airplane = await this.airplaneRepository.createAirplane(data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane services");
      throw { error };
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const response = await this.airplaneRepository.deleteAirplane(airplaneId);
      return response;
    } catch (error) {
      console.log("Something went wrong in airplane services");
      throw { error };
    }
  }

  async updateAirplane(airplaneId, data) {
    try {
      const resp = await this.airplaneRepository.updateAirplane(
        airplaneId,
        data
      );
      return resp;
    } catch (error) {
      console.log("Something went wrong in updateCity services");
      throw { error };
    }
  }

  async getAirplane(airplaneId) {
    try {
      const resp = await this.airplaneRepository.getAirplane(airplaneId);
      return resp;
    } catch (error) {
      console.log("Something went wrong in getCity services");
      throw { error };
    }
  }

  async getAllAirplane(filter) {
    try {
      const airplane = await this.airplaneRepository.getAllAirplane({
        name: filter.name,
      });
      return airplane;
    } catch (error) {
      console.log("Something went wrong in getCity services");
      throw { error };
    }
  }
}

module.exports = AirplaneService;
