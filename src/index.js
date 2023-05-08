   const express = require('express'); 
   const { PORT }=require('./config/serverConfig');
   const bodyparser=require('body-parser')

   const Cityrepository=require('./repository/city-repository');
const city = require('./models/city');

    const Setupserver=async()=>{

        const app=express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));
   
        app.listen(PORT,()=>{
            console.log(`Server is running at port ${PORT}`);
            const cityrepo=new Cityrepository();
            cityrepo.createCity("New Delhi")
        });
    }

    Setupserver();