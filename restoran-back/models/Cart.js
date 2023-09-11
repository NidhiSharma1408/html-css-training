const { Schema, SchemaTypes, model } = require("mongoose");

const cartSchema = new Schema({
    itemId: {
        type: SchemaTypes.String,
        require: true,
        unique: true,
    },
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
    },
    quantity: {
        type: SchemaTypes.Number,
        require: true
    }
});


const cart = model("cart", cartSchema);
module.exports = cart;