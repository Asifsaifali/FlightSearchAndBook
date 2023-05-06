   const express = require('express'); 
   const { PORT }=require('./config/serverConfig');

    const Setupserver=async()=>{

        const app=express();
   

        app.listen(PORT,()=>{
            console.log(`Server is running at port ${PORT}`);
            console.log(process.env)
        });
    }

    Setupserver();