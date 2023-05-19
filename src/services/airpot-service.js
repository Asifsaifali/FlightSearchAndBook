const { AirportRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class Airportservice extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
  }
}

module.exports = Airportservice;
