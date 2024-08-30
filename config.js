const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aN8GzJRR#TlAddL1CUl8F376x1kU3NeOSyWWBNbxc5rZxpywd2oY",
MONGOOB: process.env.MONGOOB || "enter mongodb here",
};
