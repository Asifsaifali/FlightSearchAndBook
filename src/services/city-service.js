const { Cityrepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new Cityrepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in city services");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in city services");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const resp = await this.cityRepository.updateCity(cityId, data);
      return resp;
    } catch (error) {
      console.log("Something went wrong in updateCity services");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const resp = await this.cityRepository.getCity(cityId);
      return resp;
    } catch (error) {
      console.log("Something went wrong in getCity services");
      throw { error };
    }
  }

  async getAllCity(filter) {
    try {
      const city = await this.cityRepository.getAllCity({ name: filter.name });
      return city;
    } catch (error) {
      console.log("Something went wrong in getCity services");
      throw { error };
    }
  }
}

module.exports = CityService;
