// How NodeJS differs from vanilla JS
// 1) Node runs on a server - not in a browser (backend nor frontend)
// 2) The console is the terminal window
console.log('Hello World');
// 3) global object instead of window object
// console.log(global);
// 4) Has Common Core modules that we'll explore
// 5) CommonJS modules instead of ES6 modules

const os = require('os');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);
