const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const Flightdata = {
      flightnumber: req.body.flightnumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await this.flightService.createFlight(Flightdata);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something wrong in Controller");
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to create Flight",
      success: false,
      err: { error },
    });
  }
};

const delet = async (req, res) => {
  try {
    const resp = await this.flightService.delet(req.params.id);
    return res.status(200).json({
      data: resp,
      success: true,
      message: "Flight Deleted successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something wrong in Controller");
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to create Flight",
      success: false,
      err: { error },
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await this.flightService.getFlight(req.params.id);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Flight Fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something wrong in Controller");
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to fetched Flight",
      success: false,
      err: { error },
    });
  }
};

module.exports = {
  create,
  delet,
  get,
};
