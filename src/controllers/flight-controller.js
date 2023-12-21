const { FlightService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

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
        return res.status(SuccessCodes.CREATED).json({
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

const get = async(req,res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            status: true,
            message: "Successfully fetched the Flight",
            err: {}
        })
    } catch (error) {
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
        return res.status(SuccessCodes.OK).json({
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

const update = async(req,res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            status: true,
            message: "Flights updated successfully",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            status: false,
            message: "Unable to update flights ",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
}