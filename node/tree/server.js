const dataObj = require('./data.json');

const SYMBOLS = {
  BRANCH: '├── ',
  EMPTY: '',
  SPACE: '    ',
  LAST_BRANCH: '└── ',
  VERTICAL: '│   ',
};

const printTreeLines = (
  { name: levelName, items: levelItems },
  currentDepth,
  prevSymbols,
  isLast = false
) => {
  const lines = [];
  if (!levelName) return lines;

  const line = [prevSymbols];
  if (currentDepth >= 1) {
    line.push(isLast ? SYMBOLS.LAST_BRANCH : SYMBOLS.BRANCH);
  }
  line.push(levelName);

  lines.push(line.join(''));
  if (!levelItems || !Array.isArray(levelItems)) {
    return lines;
  }

  levelItems.forEach((item, itemIndex) => {
    const isCurrentLast = itemIndex === levelItems.length - 1;
    const linesChildren = printTreeLines(
      item,
      currentDepth + 1,
      prevSymbols +
        (currentDepth >= 1
          ? isLast
            ? SYMBOLS.SPACE
            : SYMBOLS.VERTICAL
          : SYMBOLS.EMPTY),
      isCurrentLast
    );
    lines.push(...linesChildren);
  });
  return lines;
};

console.log(printTreeLines(dataObj, 0, '').join('\n'));
