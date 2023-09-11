const { Schema, SchemaTypes, model } = require("mongoose");

const menuSchema = new Schema({
    name: {
        type: SchemaTypes.String,
        require: true,
    },
    image: {
        type: SchemaTypes.String,
    },
    description: {
        type: SchemaTypes.String,
    },
    type: {
        type: SchemaTypes.String,
    },
    veg: {
        type: SchemaTypes.Boolean,
    },
    price: {
        type: SchemaTypes.Number,
        require: true
    }
});


const menu = model("menu", menuSchema);
module.exports = menu; 