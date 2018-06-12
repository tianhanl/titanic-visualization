const fs = require('fs');
const csvParser = require('./csvParser');

const saveToJSON = (data, name) => {
  fs.writeFile(`${name}.json`, JSON.stringify(data), err => {
    if (err) throw err;
  });
};

const convertLocalCSVToJSON = (csvUri, name) => {
  const data = csvParser.parseLocalCSVSync(csvUri);
  const columns = Object.keys(data[0]);
  const fields = data;
  const outputData = {
    columns,
    fields
  };
  saveToJSON(outputData, name);
};

module.exports = {
  saveToJSON,
  convertLocalCSVToJSON
};
