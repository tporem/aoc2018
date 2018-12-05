const calibrate = require('./1_calibration');
const fs = require('fs');

fs.readFile('./inputs/1.txt', 'utf8', (e, data) => {
  const res = calibrate.calibrateDistinct(data);
  console.log(res);
});