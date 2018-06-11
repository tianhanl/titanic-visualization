import fs from 'fs';

export const titanicData = fs.readFileSync('./titanic-train.json', 'utf8');
