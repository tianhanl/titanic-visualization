const Papa = require('papaparse');
const fs = require('fs');
const readCSV = uri => {
  return new Promise((resolve, reject) => {
    fs.readFile(uri, (err, data) => {
      if (err) reject(err);
      const dataString = data.toString('utf8');
      resolve(dataString);
    });
  });
};

const parseLocalCSV = uri => {
  return readCSV(uri)
    .then(csvString =>
      Papa.parse(csvString, {
        header: true
      })
    )
    .then(result => result.data);
};

module.exports = {
  readCSV,
  parseLocalCSV
};
