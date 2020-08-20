/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

let method = process.argv[2];
let path = undefined


// read from file
const readFromFile = () => {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        console.log(`Error reading from file: ${path}, error: ${err}`);
        process.exit(1);
      }
      console.log(data);   
    });
}

// getfrom URL
const getFromUrl = async () => {
  let res
  try {
    res = await axios.get(path);
  } catch (err) {
    console.error(`Error fetching from URL: ${path}, error: ${err}`);
    process.exit(1);
  }
  console.log(res)
};

// check if path is a URL object or a file string
const checkType = (method) => {
  if (method === 'url') {
    path = process.argv[3];
    getFromUrl()
  } else if (method === "file") {
    path = process.argv[3];
    readFromFile();
  } else {
    console.error(`Unknown method: ${process.argv[2]}`)
  }
};

checkType(method)


module.exports = { readFromFile, 
getFromUrl, 
checkType };