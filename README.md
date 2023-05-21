# Welcome to Flight Search App 
Created By Asif Hussain.

## Project Setup
 -clone the project on your local machine
 -Execute the `npm install` on the same path as of your root directory of the
  downloaded project
 -Create a `.env` file in the root directory and the following environment variable.

  if `dotenv.config()` didn't work then use 
  `dotenv.config({path:path.resolve(__dirname, '../../.env')})` to get access `.env` file.
  
  -Add `PORT=3000` to the `.env` file.

-Inside the `src/config` folder create a file `config.json` and the add the following 
  code to it.                       
 `
## Tables

### City->id,cityId,name,createdAt,updatedAt
### Airport->id,name,address,createdAt,updatedAt
 `
 #### following command is used to create Airport models
>`npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`
#### following command is used to create City models
>`npx sequelize model:generate --name City --attributes name:String,createdAt:Date,updatedAt:Date`
#### following command is used to create Flight models
>`npx sequelize model:generate --name Flight --attributes flightNumber:String,departureTime:Date,arrivalTime:Date,price:String,cityId:integer,createdAt:Date,updatedAt:Date`


