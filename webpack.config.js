const path = require('path');
const { toASCII } = require('punycode');

module.exports = {
  entry: './main.js', //entry file
  output: {
    path: path.resolve(__dirname, 'dist'), //output folder name (dist/build)
    filename: 'bundle.js', // output filename
  },
  mode: "development",
};

