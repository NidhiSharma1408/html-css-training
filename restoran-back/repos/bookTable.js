const booking = require("../models/BookTable");

const addBooking = (data) => {
    try {
        return booking.create(data);
    }
    catch (er) {
        return { error: er };
    }
};

const getAllBookings = () => {
    return booking.find();
};


module.exports = {
    addBooking,
    getAllBookings,
};