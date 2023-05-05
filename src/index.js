    const express = require('express');
    const { PORT } = require('./config/configServer');


    const Setupserver=async()=>{

        const app=express();

        app.listen(PORT,()=>{
            console.log(`Server is running at port ${PORT}`);
        });
    }

    Setupserver();