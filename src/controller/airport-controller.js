const {AirtportServices}=require('../services/index');

const airportService=new AirtportServices();

const create=async(req,res)=>{
    try {
        const airport=await airportService.create(req.body)
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Airplne created successfully",
            err: {},
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          data: {},
          message: "Not able to create airport",
          success: false,
          err: { error },
        });
    }

}
const destroy = async (req, res) => {
    try {
      const airport = await airportService.destroy(req.params.id);
      return res.status(200).json({
        data: airport,
        success: true,
        message: "Airplane deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Not able to delete airport",
        success: false,
        err: { error },
      });
    }
  };
  
  const update = async (req, res) => {
    try {
      const response = await airportService.update(
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
        message: "Not able to update airport",
        message: false,
        err: error,
      });
    }
  };
  
  const get = async (req, res) => {
    try {
      const airport = await airportService.get(req.params.id);
      if(airport===null){
        return res.status(500).json({
          data: {},
          message: "No Any plane available of this id",
          success: false
        })
      }
      return res.status(200).json({
        data: airport,
        message: "Airplane retrieve Successfully",
        success: true,
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        message: "Not able to retrieve airport",
        success: false,
        err: { error },
      });
    }
  };
  
  const getAll = async (req, res) => {
    try {
      const airport = await airportService.getAll(req.query);
      if(airport===null){
        return res.status(500).json({
          data: {},
          message: "No Any plane available of this id",
          success: false
        })
      }
      return res.status(200).json({
        data: airport,
        message: "Airplane retrieve Successfully",
        success: true,
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        message: "Not able to retrieve airport",
        success: false,
        err: { error },
      });
    }
  };

module.exports={
    create,
    destroy,
    get,
    getAll,
    update,
}