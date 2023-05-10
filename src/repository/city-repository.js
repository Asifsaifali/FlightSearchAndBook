const { City } = require("../models/index");

class Cityrepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async deleteCity(cityid) {
    try {
      await City.destroy({
        where: {
          id: cityid,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // const city = await City.findByPk(cityid);
      // city.name = data.name;
      // await city.save();
      const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city; 
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city=await City.findByPk(cityId)
      return city;
    } catch (error) {
      console.log("Something went wrong");
      throw {error};
    }
  }

  async getAllCity(){
    try {
      const city =await City.findAll()
      return city;
    } catch (error) {
      console.log("Something went wrong");
      throw {error};
    }
  }
}

module.exports = Cityrepository;
