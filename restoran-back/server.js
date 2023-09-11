require('dotenv').config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const db = require("./db");
const bookTableRouter = require("./routes/bookTable");
const contactUsRouter = require("./routes/contactUs");

const PORT_NUMBER = argv.port || 3000;

//application setup related things
const app = express();
app.use(helmet());

app.use(morgan("dev"));

app.use(express.json()); // for parsing JSON bodies (req)
app.use(express.urlencoded({ extended: true })); // for parsing url encoded bodies 

// app routes defined here
app.use("/booking", bookTableRouter);
app.use("/contact", contactUsRouter);

// start running application 
app.listen(PORT_NUMBER, (err) => {
    console.log("Attempting to start server...");
    if (err) {
        console.log("Failed to start server");
        return process.exit(1);
    }
    else {
        console.log(`Starting server on http://localhost:${PORT_NUMBER}`);
        db().catch(e => console.log("Failed to connect to DB ", e));
    }
});