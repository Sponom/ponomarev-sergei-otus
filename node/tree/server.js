const dataObj = require('./data.json');
const tree = require('./tree');
const {
  convertTreeToString,
  generateTreeLines
} = tree;

const initialParams = {
  level: dataObj,
  currentDepth: 0,
  prevSymbols: ''
}

console.log(convertTreeToString(generateTreeLines(initialParams)));