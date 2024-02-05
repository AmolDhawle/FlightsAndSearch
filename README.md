# Welcome to Flight Service

Welcome to the Flights and Search Service! This service provides APIs to manage flights, cities, and airports within the airline booking management system.

# Endpoints
1. Create City: POST /city - Create a new city.

2. Delete City: DELETE /city/:id - Delete a city by ID.

3. Get City: GET /city/:id - Get details of a city by ID.

4. Get All Cities: GET /city - Get details of all cities.

5. Update City: PATCH /city/:id - Update details of a city by ID.

6. Create Flight: POST /flights - Create a new flight.

7. Get All Flights: GET /flights - Get details of all flights.

8. Get Flight: GET /flights/:id - Get details of a flight by ID.

9. Update Flight: PATCH /flights/:id - Update details of a flight by ID.

10. Create Airport: POST /airports - Create a new airport.

# Getting Started
To get started with the Flights and Search Service, follow these steps:

## Project setup

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

-Once you've added  your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute  `npx sequelize db:migrate`.
Start the service using `npm start`.
Access the endpoints using a REST client or integrate them into your application.
    
    - A flight belongs to one airport but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights but a flight belongs to one airport

