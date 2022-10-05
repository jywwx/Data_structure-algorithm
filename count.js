const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname,'./leetcode');

const files = fs.readdirSync(dir);
const len = files.filter((f) => f.indexOf('.js') !== -1).length;
console.log(`一共练习了${len}道题，加油`)