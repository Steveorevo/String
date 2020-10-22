!!! This package is old, consider using https://github.com/steveorevo/string.js for your JavaScript string needs !!!

<p align="center">
  <img src="https://raw.github.com/serverpress/String/master/logo.png" alt="String" />
</p>

**String** provides extended string parsing functions. This function library is available in JavaScript. ActionScript, PHP, Lingo, Visual Basic, and Xojo. Contact author for commercial licensing.

### example
The beauty of these natural, chain-able functions are to locate a given substring from right-to-left or left-to-right and extract or delete upto and including given content. The example illustrates isolating the substring "Hello Earth" from the given string.

```javascript
require('String');
var sample = 'The Sun said, "Hello Earth" to third planet.';
var result = sample.delRightMost('" to').delLeftMost('said, "'); // result now contains Hello Earth
```

###Node.js

Package is available through npm:

```bash
$ npm install StringParse
```
