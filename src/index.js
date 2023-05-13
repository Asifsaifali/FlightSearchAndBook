   const express = require('express'); 
   const { PORT }=require('./config/serverConfig');
   const bodyparser=require('body-parser')
   const ApiRoutes=require('./routes/index');

   const {City,Airplane}=require('./models/index')
const db=require('./models/index')

    const Setupserver=async()=>{

        const app=express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));

        app.use('/api',ApiRoutes)
   
        app.listen(PORT,async()=>{
            console.log(`Server is running at port ${PORT}`);
           
            await Airplane.create({
               modelNumber:'Listara X763A'
            })
        });
    }

    Setupserver();