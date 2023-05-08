const { CityService } = require("../services/index");

const cityservice = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityservice.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      err: { err },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Not able to create city",
      success: false,
      err: { error },
    });
  }
};

const delet = async (req, res) => {
  try {
    const city = await cityservice.deletCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "City deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Not able to delete city",
      success: false,
      err: { error },
    });
  }
};

const updte = async (req, res) => {
  try {
    const response = await cityservice.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Not able to update city",
      message: false,
      err: { error },
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityservice.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      message: "City retrieve Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Not able to retrieve city",
      success: false,
      err: { error },
    });
  }
};
