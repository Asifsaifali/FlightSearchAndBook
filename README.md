# Welcome to Flight Search App 
Created By Asif Hussain.

# Project Setup
 -clone the project on your local machine.
 -open the project in VS Code.
 -open terminal in VS Code.

 -Execute the `npm install` on the same path as of your root directory of the
  downloaded project
 -Create a `.env` file in the root directory and the following environment variable.

  if `dotenv.config()` didn't work then use 
  `dotenv.config({path:path.resolve(__dirname, '../../.env')})` to get access `.env` file.
  
  -Add `PORT=3000` to the `.env` file.

-Inside the `src/config` folder create a file `config.json` and the add the following 
  code to it.

  ```

    {
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "<YOUR_DB_PSWD>",
    "database": "Flight_Search_App",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}


  ```  
#Once you have done all the configuration listed above you need run the following coomands-
 `npx sequelize db:create`

 


