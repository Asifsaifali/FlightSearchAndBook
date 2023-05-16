const {Flight}=require('../models/index')

class FlightRepository{

    async createFlight(data){
        try {
            const flight=await Flight.create(data);
            return flight;
            
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{error};
        }
    }

    async deleteFlight(flightId){
        try {
            const response=await Flight.destro(flightId);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{error};
        }
    }

    async getFlight(flightId){
        try {
            const get=await Flight.findByPk(flightId);
            return get;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{error};
        }
    }
}

module.exports=FlightRepository