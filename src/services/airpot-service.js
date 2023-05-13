const {AirportRepository}=require('../repository/index')

class Airportservice{
     constructor(){
        this.airportRepository=new AirportRepository()
        }

      async createAirport(data){
        try {
            const airport=await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in Airport service");
            throw {error};
        }
      }  

      async deleteAirport(airId){
        try {
            const response=await this.airportRepository.deleteAirport(airId)
            return response;
        } catch (error) {
            console.log("Something went wrong in Airport service");
            throw {error};
        }
      }  

      async updateAirport(airId,data){
        try {
          const airport=await this.airportRepository.updateAirport(airId,data);
          return airport;
        } catch (error) {
            console.log("Something went wrong in Airport service");
            throw {error};
        }
      }  

      async getAirport(airId){
        try {
          const airport=await this.airportRepository.getAirport(airId);
          return airport;
        } catch (error) {
            console.log("Something went wrong in Airport service");
            throw {error};
        }
      }  
}

module.exports=Airportservice;