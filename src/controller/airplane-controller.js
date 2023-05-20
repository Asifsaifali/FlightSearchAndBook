const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.createAirplane(req.body);
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Airplane created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to create airplane",
      success: false,
      err: { error },
    });
  }
};

const delet = async (req, res) => {
  try {
    const airplane = await airplaneService.deleteAirplane(req.params.id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Airplane deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Not able to delete airplane",
      success: false,
      err: { error },
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "Airplane updated Successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to update airplane",
      message: false,
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airplane = await airplaneService.getAirplane(req.params.id);
    if(airplane===null){
      return res.status(500).json({
        data: {},
        message: "No Any plane available of this id",
        success: false
      })
    }
    return res.status(200).json({
      data: airplane,
      message: "Airplane retrieve Successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to retrieve airplane",
      success: false,
      err: { error },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airplane = await airplaneService.getAllAirplane(req.query);
    return res.status(200).json({
      data: airplane,
      message: "Airplane retrieve Successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to retrieve airplane",
      success: false,
      err: { error },
    });
  }
};

module.exports = {
  create,
  delet,
  update,
  get,
  getAll,
};
