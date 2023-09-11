const { Schema, SchemaTypes, model } = require("mongoose");

const contactUsSchema = new Schema({
    name: {
        type: SchemaTypes.String,
        require: true,
    },
    email: {
        type: SchemaTypes.String,
        require: true,
    },
    subject: {
        type: SchemaTypes.String,
        require: true
    },
    message: {
        type: SchemaTypes.String,
    },
});


const contactUs = model("contactUs", contactUsSchema);
module.exports = contactUs;