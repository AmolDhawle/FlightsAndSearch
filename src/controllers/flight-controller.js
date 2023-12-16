const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async(req,res) => {
    try{
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departuretime: req.body.departuretime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(200).json({
            data: flight,
            status: true,
            message: "Flight created successfully",
            err: {}
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            status: false,
            message: "Unable to create a flight ",
            err: error
        });
    }
}

const getAll = async(req,res) => {
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            status: true,
            message: "Flights fetched successfully",
            err: {}
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            status: false,
            message: "Unable to fetch flights ",
            err: error
        });
    }
}
module.exports = {
    create,
    getAll
}