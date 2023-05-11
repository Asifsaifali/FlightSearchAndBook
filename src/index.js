   const express = require('express'); 
   const { PORT }=require('./config/serverConfig');
   const bodyparser=require('body-parser')
   const ApiRoutes=require('./routes/index');

   const {City,Airport}=require('./models/index')
const db=require('./models/index')

    const Setupserver=async()=>{

        const app=express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));

        app.use('/api',ApiRoutes)
   
        app.listen(PORT,async()=>{
            console.log(`Server is running at port ${PORT}`);
           const city=await City.findOne({
             where:{
                id:6,
             }
           })
           const arport=await city.getAirports();
           console.log(city,arport)
        });
    }

    Setupserver();