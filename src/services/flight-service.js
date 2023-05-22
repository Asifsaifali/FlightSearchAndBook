const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { Comprison } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightService = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!Comprison(data.arrivalTime, data.departureTime)) {
        throw {
          error: "Arrival time cannot be less than departure time",
        };
      }

      const airplane = await this.airplaneRepository.get(
        data.airplaneId
      );
      const flight = await this.flightService.createFlight({
        ...data,
        totalSeat: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something wrong in Service");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightService.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something wrong in Service");
      throw { error };
    }
  }

  async getAllFlight() {}

  async updateFlight(flightId, data) {
    try {
      await this.flightService.updateFlight(flightId, data);
      return true;
    } catch (error) {
      console.log("Something wrong in Service");
      throw { error };
    }
  }
}

module.exports = FlightService;
