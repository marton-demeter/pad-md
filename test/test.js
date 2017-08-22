const pad = require('../pad-md.js');
  
var result = pad.left('text', 5);       // " text"
console.log(result);
var result = pad.right('text', 5);      // "text "
console.log(result);

// provide fill
var result = pad.left('text', 5, '+');  // "+text"
console.log(result);
var result = pad.right('text', 5, '_'); // "text_"
console.log(result);

// set default (persistent) left fill
pad.tl('+');

// set default (persistent) right fill
pad.tr('_');

var result = pad.left('text', 5)  // "+text"
console.log(result);
var result = pad.right('text', 5) // "text_"
console.log(result);

// reset left and right fill
pad.reset();

var result = pad.left('text', 5)  // " text"
console.log(result);
var result = pad.right('text', 5) // "text "
console.log(result);

// set default (persistent) left and right fill
var result = pad.fill('+');
console.log(result);

var result = pad.mid('text', 5)    // "+++text+++"
console.log(result);
var result = pad.mid('text', 5, 3) // "+++text+"
console.log(result);

var result = pad.reset();
console.log(result);

// set the edge fill
var result = pad.mid('text', 5, 5, '#'); // "#  text  #"
console.log(result);
var result = pad.mid('text', 3, 5, '#'); // "#text  #"
console.log(result);

// intuitive padding - right
var result = pad.pad('text', 5); // "text "
console.log(result);

// intuitive padding - left
var result = pad.pad(5, 'text'); // " text"
console.log(result);

var result = pad.pad('text', 5, '_'); // "text_"
console.log(result);
var result = pad.pad(5, 'text', '+'); // "+text"
console.log(result);

// log result
console.log(result);