const city = require('../models/city');
const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async(req, res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}

const get = async(req, res) => {
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            status: true,
            message: "Successfully fetched a city",
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            status: false,
            message: "Unable to fetch a city",
            err: error
        })
    }
}

const getAll = async(req, res) => {
    try{
        const response = await cityService.getAllCities();
        return res.status(200).json({
            data: response,
            status: true,
            message: "Successfully fetched cities",
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            status: false,
            message: "Unable to fetch a city",
            err: error
        })
    }
    

}

const update = async(req, res) => {
    try{
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            status: true,
            message: "City updated successfully",
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            status: false,
            message: "Failed to update the city",
            err: error
        })
    }
}

const destroy = async(req, res) => {
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            status: true,
            message: "City deleted successfully",
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            status: false,
            message: "Failed to delete the city"
        })
    }
}

module.exports = {
    create,
    get,
    getAll,
    update,
    destroy
}