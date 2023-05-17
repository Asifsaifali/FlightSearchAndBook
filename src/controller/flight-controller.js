const { FlightService } = require("../services/index");

const flightservice = new FlightService();

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
    const flight = await flightservice.createFlight(Flightdata);
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



const get = async (req, res) => {
  try {
    const flight = await flightservice.getFlight(req.params.id);
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

const update=async(req,res)=>{
  try {
    const flight=await flightservice.updateFlight(req.params.id,req.body);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Flight Updated successfully",
      err: {},
    })
  } catch (error) {
    console.log("Something wrong in Controller");
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to Update Flight",
      success: false,
      err: { error },
    });
  }
}

module.exports = {
  create,
  get,
  update,
};
