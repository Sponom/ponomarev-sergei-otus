const tree = require('../tree');
const {
  generateTreeLines,
  convertTreeToString,
  generateOneLine,
  getNextSymbols,
  getLastSymbols,
} = tree;

const testDataObject = {
  name: 1,
  items: [
    {
      name: 2,
    },
  ],
};

const initialParams = {
  level: testDataObject,
  currentDepth: 0,
  prevSymbols: '',
};

const mockTree = '1\n└── 2';
const mockTreeArr = ['1', '└── 2'];

describe('Tree', () => {
  test('generateTreeLines()', () => {
    expect(generateTreeLines(initialParams)).toEqual(mockTreeArr);
  });

  test('generateTreeLines() with empty name', () => {
    const newParams = {
      ...initialParams,
      level: {
        ...testDataObject,
        name: ''
      }
    }
    expect(generateTreeLines(newParams)).toEqual([]);
  });

  test('generateOneLine() last element on level', () => {
    const params = {
      levelName: '2',
      currentDepth: 1,
      prevSymbols: '',
      isLastElemOnLevel: true,
    };
    expect(generateOneLine(params)).toEqual('└── 2');
  });

  test('generateOneLine() not last element on level', () => {
    const params = {
      levelName: '2',
      currentDepth: 1,
      prevSymbols: '',
      isLastElemOnLevel: false,
    };
    expect(generateOneLine(params)).toEqual('├── 2');
  });
  
  test('generateOneLine() first level depth line', () => {
    const params = {
      levelName: '1',
      currentDepth: 0,
      prevSymbols: '',
      isLastElemOnLevel: true,
    };
    expect(generateOneLine(params)).toEqual('1');
  });

  test('convertTreeToString()', () => {
    const treeArr = generateTreeLines(initialParams);
    expect(convertTreeToString(treeArr)).toEqual(mockTree);
  });

  test('getNextSymbols()', () => {
    expect(getNextSymbols(1, false)).toEqual('│   ');
  });

  test('convertTreeToString()', () => {
    expect(getLastSymbols(true)).toEqual('    ');
  });
});
