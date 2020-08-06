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
  describe('#generateTreeLines()', () => {
    it('works correct', () => {
      expect(generateTreeLines(initialParams)).toEqual(mockTreeArr);
    });

    it('works correct with empty name', () => {
      const newParams = {
        ...initialParams,
        level: {
          ...testDataObject,
          name: ''
        }
      }
      expect(generateTreeLines(newParams)).toEqual([]);
    });
  });

  describe('#generateOneLine()', () => {
    it('works for last element on level', () => {
      const params = {
        levelName: '2',
        currentDepth: 1,
        prevSymbols: '',
        isLastElemOnLevel: true,
      };
      expect(generateOneLine(params)).toEqual('└── 2');
    });
  
    it('works for not last element on level', () => {
      const params = {
        levelName: '2',
        currentDepth: 1,
        prevSymbols: '',
        isLastElemOnLevel: false,
      };
      expect(generateOneLine(params)).toEqual('├── 2');
    });
    
    it('works for first level depth line', () => {
      const params = {
        levelName: '1',
        currentDepth: 0,
        prevSymbols: '',
        isLastElemOnLevel: true,
      };
      expect(generateOneLine(params)).toEqual('1');
    });
  });
  
  describe('#convertTreeToString()', () => {
    it('works correct', () => {
      const treeArr = generateTreeLines(initialParams);
      expect(convertTreeToString(treeArr)).toEqual(mockTree);
    });
  })

  describe('#getNextSymbols()', () => {
    it('works correct', () => {
      expect(getNextSymbols(1, false)).toEqual('│   ');
    });
  })

  describe('#getLastSymbols()', () => {
    it('works correct', () => {
      expect(getLastSymbols(true)).toEqual('    ');
    });
  })
});
