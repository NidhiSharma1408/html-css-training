const { Schema, SchemaTypes, model } = require("mongoose");

const serviceSchema = new Schema({
    title: {
        type: SchemaTypes.String,
        require: true,
    },
    icon: {
        type: SchemaTypes.String,
        require: true,
    },
    description: {
        type: SchemaTypes.String,
    },
});


const service = model("service", serviceSchema);
module.exports = service;