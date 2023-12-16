const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber  ||
        !req.body.airplaneId  ||
        !req.body.departureAirportId  ||
        !req.body.arrivalAirportId  ||
        !req.body.arrivalTime ||
        !req.body.departuretime  ||
        !req.body.price
    ){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            status: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory property to create a flight'
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}