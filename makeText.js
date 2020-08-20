/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");


// read file
const readFile = (file) => {
    fs.readFile(file, 'utf8', function(err, data) {
        
    });
}
