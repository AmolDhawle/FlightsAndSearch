const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async(req,res) => {
    try{
        const flight = await flightService.createFlight(req.body);
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

module.exports = {
    create
}