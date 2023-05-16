   const express = require('express'); 
   const { PORT }=require('./config/serverConfig');
   const bodyparser=require('body-parser')
   const ApiRoutes=require('./routes/index');

   const {City,Flight}=require('./models/index')
const db=require('./models/index')

    const Setupserver=async()=>{

        const app=express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));

        app.use('/api',ApiRoutes)
   
        app.listen(PORT,async()=>{
            console.log(`Server is running at port ${PORT}`);

            // await Flight.create({
            //     flightnumber:"AA201 ",
            //     airplaneId:1,
            //     departureAirportId:2,
            //     arrivalAirportId:4,
            //     arrivalTime:"2023-05-20T17:15:10",
            //     departureTime:"2023-05-20T14:45:15",
            //     price:5500,
            //     totalSeat:200
            // })

        });
    }

    Setupserver();