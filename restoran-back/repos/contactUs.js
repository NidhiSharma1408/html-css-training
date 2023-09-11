const contactRequest = require("../models/ContactUs");

const addContactRequest = (data) => {
    try {
        return contactRequest.create(data);
    }
    catch (er) {
        return { error: er };
    }
};

const getAllContactRequests = () => {
    return contactRequest.find();
};


module.exports = {
    addContactRequest,
    getAllContactRequests,
};