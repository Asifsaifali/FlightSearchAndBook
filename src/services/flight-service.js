const { FlightRepository } = require("../repository/index");
const {Comprison}=require('../utils/helper')
const {AirplneRepository}=require('../repository/')

class FlightService {
  constructor() {
    this.flightService = new FlightRepository();
  }

  async createFlight(data) {
    try {

      if(!Comprison(data.arrivalTime,data.departureTime)){
         throw {
            error:"Arrival time cannot be less than departure time"
        }
      }


      const flight = await this.flightService.createFlight(data);
      return flight;
    } catch (error) {
      console.log("Something wrong in Service");
      throw { error };
    }
  }

  async deleteFLight(flightId) {
    try {
      const resp = await this.flightService.deleteFlight(flightId);
      return resp;
    } catch (error) {
      console.log("Something wrong in Service");
      throw { error };
    }
  }

  async getFlight(flightId){
    try {
        const flight=await this.flightService.getFlight(flightId);
        return flight;
    } catch (error) {
        console.log("Something wrong in Service")
            throw{error};
    }
  }
}

module.exports = FlightService;
