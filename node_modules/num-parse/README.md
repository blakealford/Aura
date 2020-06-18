# Package for parsing numbers from any string

Parse number from any string if it's possible. 

Works in Node.js and browsers.

## Usage

```js
const numParse = require('num-parse')

numParse('text5.5text') // -> 5.5
numParse('text-5.5text') // -> -5.5
numParse('text%&*-5.5text') // -> -5.5
numParse('text--5.5text') // -> -5.5
numParse('test some-5.5m') // -> -5.5

numParse('5,000') // -> 5000
numParse('text 5,000,55') // -> 500055
numParse('5,000.55') // -> 5000.55
numParse('text5,000.55some') // -> 5000.55

numParse('text 5,000 55') // -> 5000
numParse('text 5,000.55 some 100000 other 345') // -> 5000.55

numParse('srt') // -> NaN
numParse('') // -> NaN
numParse(undefined) // -> NaN
numParse(null) // -> NaN

```

## License

MIT