const { Schema, SchemaTypes, model } = require("mongoose");

const BookTableSchema = new Schema({
    name: {
        type: SchemaTypes.String,
        require: true,
    },
    email: {
        type: SchemaTypes.String,
        require: true,
    },
    people: {
        type: SchemaTypes.Number,
        require: false,
    },
    datetime: {
        type: SchemaTypes.Date,
        require: true,
    },
    message: {
        type: SchemaTypes.String,
    },
});


const bookTable = model("bookTable", BookTableSchema);
module.exports = bookTable;