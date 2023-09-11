const cart = require("../models/Cart");

const addCart = (data) => {
    try {
        return cart.create(data);
    }
    catch (er) {
        return { error: er };
    }
};
const updateCart = (id, data) => {
    return cart.findOneAndUpdate({ itemId: id }, data, { upsert: true });
};
const getAllCarts = () => {
    return cart.find();
};
const getCartById = (id) => {
    return cart.findOne({ itemId: id });
};
const removeCart = (id) => {
    return cart.findOneAndRemove({ itemId: id });
};

module.exports = {
    addCart,
    removeCart,
    updateCart,
    getAllCarts,
    getCartById,
};