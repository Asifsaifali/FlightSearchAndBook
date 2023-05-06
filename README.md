#Welcome to Flight Search App

#Project Setup
 -clone the project on your local machine
 -Execute the `npm install` on the same path as of your root directory of the
 downloaded project
 -Create a `.env` file in the root directory and the following environment variable
  -`PORT=3000`

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

