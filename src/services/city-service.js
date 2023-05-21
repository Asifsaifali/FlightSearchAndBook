const { Cityrepository } = require("../repository/index");
const CrudService=require('./crud-service')

class CityService extends CrudService {
  constructor() {
    const cityRepository = new Cityrepository();
    super(cityRepository)
  }
}

module.exports = CityService;
