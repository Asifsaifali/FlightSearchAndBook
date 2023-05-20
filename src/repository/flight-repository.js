const {Flight}=require('../models/index')
const CrudRepository=require('./crud-repository')

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    // async createFlight(data){
    //     try {
    //         const flight=await Flight.create(data);
    //         return flight;
            
    //     } catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{error};
    //     }
    // }

    // async getFlight(flightId){
    //     try {
    //         const get=await Flight.findByPk(flightId);
    //         return get;
    //     } catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{error};
    //     }
    // }

    // async updateFlight(flightId,data){
    //     try {
    //         await Flight.update(data,{
    //             where:{
    //                 id:flightId
    //             }
    //         })
    //         return true;  
    //     } catch (error) {
    //         console.log("Something went wrong in repository");
    //         throw{error};
    //     }
    // }
}

module.exports=FlightRepository