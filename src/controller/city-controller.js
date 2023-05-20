const { CityService } = require("../services/index");

const cityservice = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityservice.create(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data:{},
      message: "Not able to create city",
      success: false,
      err: { error },
    });
  }
};

const delet = async (req, res) => {
  try {
    const city = await cityservice.destroy(req.params.id);
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

const update = async (req, res) => {
  try {
    const response = await cityservice.update(req.params.id,req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City updated Successfully",
      err:{},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data:{},
      message: "Not able to update city",
      message: false,
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityservice.get(req.params.id);
    return res.status(200).json({
      data: city,
      message: "City retrieve Successfully",
      success: true,
      err:{},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ 
      data:{},
      message: "Not able to retrieve city",
      success: false,
      err: { error },
    });
  }
};

const getAll=async(req,res)=>{
  try{
    const city=await cityservice.getAll(req.query );
    return res.status(200).json({
      data:city,
      message: "City retrieve Successfully",
      success: true,
      err:{},
    });
  }catch (error) {
    console.log(error);
   return res.status(500).json({ 
      data:{},
      message: "Not able to retrieve city",
      success: false,
      err: { error },
    });
  }
}



module.exports={
  create,
  delet,
  update,
  get,
  getAll,
};
