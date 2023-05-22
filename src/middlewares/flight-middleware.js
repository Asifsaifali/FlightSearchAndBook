const { ClientSideError } = require("../utils/CodeError");

const ValidationFlight = (req, res, next) => {
  if (
    !req.body.flightnumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.price
  ) {
    return res.status(ClientSideError.BAD_REQUEST).json({
      message: "Invalid request to create Flight",
      success: false,
      data: {},
      err: "Missing mandatory property to create flight",
    });
  }
  next();
};

module.exports = {
  ValidationFlight,
};
