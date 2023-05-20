const { City } = require("../models/index");
const CrudRepository = require("./crud-repository");
class Cityrepository extends CrudRepository{
  constructor(){
    super(City);
  }
}

module.exports = Cityrepository;
