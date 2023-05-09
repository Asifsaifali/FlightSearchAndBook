   const express = require('express'); 
   const { PORT }=require('./config/serverConfig');
   const bodyparser=require('body-parser')
   const ApiRoutes=require('./routes/index');

   const {City}=require('./models/index')

    const Setupserver=async()=>{

        const app=express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));

        app.use('/api',ApiRoutes)
   
        app.listen(PORT,()=>{
            console.log(`Server is running at port ${PORT}`);

        });
    }

    Setupserver();