const SYMBOLS = {
  BRANCH: '├── ',
  EMPTY: '',
  SPACE: '    ',
  LAST_BRANCH: '└── ',
  VERTICAL: '│   ',
};

const getLastSymbols = (isLastElemOnLevel) => {
  return isLastElemOnLevel ? SYMBOLS.SPACE : SYMBOLS.VERTICAL;
};

const getNextSymbols = (depth, isLastElemOnLevel) => {
  return depth >= 1 ? getLastSymbols(isLastElemOnLevel) : SYMBOLS.EMPTY;
};

const generateOneLine = ({
  levelName = '',
  currentDepth = 0,
  prevSymbols = '',
  isLastElemOnLevel = false,
}) => {
  const line = [prevSymbols];

  if (currentDepth >= 1) {
    line.push(isLastElemOnLevel ? SYMBOLS.LAST_BRANCH : SYMBOLS.BRANCH);
  }
  line.push(levelName);

  return line.join('');
};

const generateTreeLines = (levelData) => {
  const {
    level = {},
    currentDepth,
    prevSymbols,
    isLastElemOnLevel = false,
  } = levelData;

  const { name: levelName, items: levelChildren } = level;
  const lines = [];

  if (!levelName) return lines;

  const newLine = generateOneLine({
    levelName,
    currentDepth,
    prevSymbols,
    isLastElemOnLevel,
  });

  lines.push(newLine);

  if (!levelChildren || !Array.isArray(levelChildren)) {
    return lines;
  }

  levelChildren.forEach((level, levelIndex) => {
    const isCurrentLast = levelIndex === levelChildren.length - 1;
    const childLevel = {
      level,
      currentDepth: currentDepth + 1,
      prevSymbols:
        prevSymbols + getNextSymbols(currentDepth, isLastElemOnLevel),
      isLastElemOnLevel: isCurrentLast,
    };
    lines.push(...generateTreeLines(childLevel));
  });

  return lines;
};

const convertTreeToString = (generatedTreeArr) => {
  return generatedTreeArr.join('\n');
};

module.exports = {
  convertTreeToString,
  generateTreeLines,
  generateOneLine,
  getNextSymbols,
  getLastSymbols
};
