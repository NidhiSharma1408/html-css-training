const service = require("../models/Services");

const addService = (data) => {
    try {

        return service.create(data);

    }
    catch (er) {
        return { error: er };
    }
};

const getAllServices = () => {
    return service.find();
};


module.exports = {
    addService,
    getAllServices,
};