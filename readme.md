# Description

This is a module for simple string padding. It only returns the modified string, it doesn't write to stdout.

# Installation

##### Local

```
  [sudo] npm install --save pad-md
```

##### Global

```
  [sudo] npm install --global pad-md
```

# Usage

```javascript
  const pad = require('pad-md');
  
  var result = pad.left('text', 5);       // " text"
  var result = pad.right('text', 5);      // "text "
  
  // provide fill
  var result = pad.left('text', 5, '+');  // "+text"
  var result = pad.right('text', 5, '_'); // "text_"
  
  // set default (persistent) left fill
  pad.tl('+');
  
  // set default (persistent) right fill
  pad.tr('_');
  
  var result = pad.left('text', 5)  // "+text"
  var result = pad.right('text', 5) // "text_"
  
  // reset left and right fill
  pad.reset();
  
  var result = pad.left('text', 5)  // " text"
  var result = pad.right('text', 5) // "text "
  
  // set default (persistent) left and right fill
  var result = pad.fill('+');
  
  var result = pad.mid('text', 5)    // "+++text+++"
  var result = pad.mid('text', 5, 3) // "+++text+"
  
  var result = pad.reset();
  
  // set the edge fill
  var result = pad.mid('text', 5, 5, '#'); // "#  text  #"
  var result = pad.mid('text', 3, 5, '#'); // "#text  #"
  
  // intuitive padding - right
  var result = pad.pad('text', 5); // "text "
  
  // intuitive padding - left
  var result = pad.pad(5, 'text'); // " text"
  
  var result = pad.pad('text', 5, '_'); // "text_"
  var result = pad.pad(5, 'text', '+'); // "+text"
  
  // log result
  console.log(result);
  
```