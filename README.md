#Welcome to Flight Service


##Project setup

-clone the project on your local
-Execute `npm install` on th esame path as of your ropot directory of the downloaded project
-Create a `.env` file in the root directory and add the following environment variable
    -`PORT: 3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Flights_Search_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```




