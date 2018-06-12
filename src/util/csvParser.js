const Papa = require('papaparse');
const fs = require('fs');

const defaultConfig = {
  header: true
};

const readCSV = uri => {
  return new Promise((resolve, reject) => {
    fs.readFile(uri, (err, data) => {
      if (err) reject(err);
      const dataString = data.toString('utf8');
      resolve(dataString);
    });
  });
};

const parseLocalCSV = (uri, config = defaultConfig) => {
  return readCSV(uri)
    .then(csvString => Papa.parse(csvString, config))
    .then(result => result.data);
};

const parseLocalCSVSync = (uri, config = defaultConfig) => {
  const csvString = fs.readFileSync(uri).toString('utf8');
  const result = Papa.parse(csvString, config);
  return result.data;
};

module.exports = {
  readCSV,
  parseLocalCSV,
  parseLocalCSVSync
};
