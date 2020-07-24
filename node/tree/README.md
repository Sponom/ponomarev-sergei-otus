# Object tree printing application

Home work after lesson 1 - Object tree printing application
Home work after lesson 5 - Add tests with >95% coverage

## Usage
Given JSON Object from `data.json` file like this:

```json
{
  "name": 1,
  "items": [
    {
      "name": 2,
      "items": [{ "name": 3 }, { "name": 4 }]
    },
    {
      "name": 5,
      "items": [{ "name": 6 }]
    }
  ]
}
```

application will print this tree:

```
1
├── 2
│   ├── 3
│   └── 4
└── 5
    └── 6
```

To print tree run,

```bash
$ npm start
```

To test application run,

```bash
$ npm run test
```

To test with coverage run,

```bash
$ npm run test:coverage
```
