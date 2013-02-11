A collection of Number utility functions.

## Usage
```javascript
var numberUtils = require('util.number');

numberUtils.normalize(50, 0, 100); // => 0.5
numberUtils.interpolate(0.5, 0, 100); // => 50
numberUtils.map(5, 0, 10, 0, 100); // => 50
numberUtils.limit(5, 0, 1); // => 1
numberUtils.rangedRandom(1, 10); // => 6
```