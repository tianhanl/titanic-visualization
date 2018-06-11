const csvParser = require('./csvParser');
const fs = require('fs');

const data = csvParser.parseLocalCSVSync('../data/titanic-train.csv');

const relevantKeys = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Embarked'];

const targetKey = 'Survived';

const defaultValueFilter = value => value;

const aggregateData = (
  data,
  relevantKeys,
  targetKey,
  targetKeyValue,
  valueFilter = defaultValueFilter
) => {
  const initialData = relevantKeys.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = {
      values: {},
      total: 0
    };
    return accumulator;
  }, {});

  const aggregateData = data.reduce((accumulator, currentValue) => {
    const targetMet = currentValue[targetKey] === targetKeyValue;
    relevantKeys.forEach(key => {
      const currentKeyValue = currentValue[key];
      accumulator[key]['total'] += 1;
      if (valueFilter(currentKeyValue)) {
        if (!accumulator[key]['values'][currentKeyValue]) {
          accumulator[key]['values'][currentKeyValue] = 0;
        }
        if (targetMet) accumulator[key]['values'][currentKeyValue] += 1;
      }
    });
    return accumulator;
  }, initialData);

  return aggregateData;
};

const saveToJSON = (data, name) => {
  fs.writeFile(`${name}.json`, JSON.stringify(data), err => {
    if (err) throw err;
  });
};

module.exports = {
  aggregateData,
  saveToJSON
};
