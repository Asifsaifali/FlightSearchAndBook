const { AirplaneRepository } = require("../repository/index");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) {
    try {
      const airplne = await this.airplaneRepository.createAirplane(data);
      return airplne;
    } catch (error) {
      console.log("Something went wrong in airplne services");
      throw { error };
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const response = await this.airplaneRepository.deleteAirplane(airplaneId);
      return response;
    } catch (error) {
      console.log("Something went wrong in airplne services");
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
      const airplne = await this.airplaneRepository.getAllAirplane({
        name: filter.name,
      });
      return airplne;
    } catch (error) {
      console.log("Something went wrong in getCity services");
      throw { error };
    }
  }
}

module.exports = AirplaneService;
