const {Airport}=require('../models/index')

class AirportRepository{

    async createAirport({name}){
        try {
            const airport=await Airport.create({
                name 
             })
        } catch (error) {
            console.log("Something went wrong in Repsitory")
            throw {error}
        }
    }

    async deleteAirport(airId){
        try {
            const airport=await Airport.destroy({
                where:{
                    id:airId,
                }
            })
            return airport;    
        } catch (error) {
            console.log("Something went wrong in Repsitory")
            throw {error}
        }
    }

    async updateAirport(airId,data){
        try {
            const airport=await Airport.findByPk(airId)
            airport.name=data.name;
            airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in Repsitory")
            throw {error}
        }
    }

    async getAirport(airId){
        try {
            const response=await Airport.findByPk(airId);
            return response;
        } catch (error) {
            console.log("Something went wrong in Repsitory")
            throw {error}
        }
    }
}


module.exports=AirportRepository;