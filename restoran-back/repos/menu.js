const menu = require("../models/Menu");

const addMenu = (data) => {
    try {
        return menu.create(data);
    }
    catch (er) {
        return { error: er };
    }
};

const getAllMenus = () => {
    return menu.find();
};


module.exports = {
    addMenu,
    getAllMenus,
};