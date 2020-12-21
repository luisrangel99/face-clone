const fs = require('fs');
const {getDate, cleanStr} = require('./util');

const saveLog = (log) => {
    let date = cleanStr(getDate());
    fs.writeFile(`${__dirname}/logs/${date}.txt`, log, (err) => {
        if(err) return console.log(err);
    });
};

module.exports = {
    saveLog
}