# starso

A lightweight string utility library for JavaScript.

## Features
- `slugify`: Converts a string to a URL-friendly slug  
- `smartTrim`: Removes extra spaces and trims the string  
- `maskPhone`: Masks part of a phone number, keeping the first 2 and last 3 digits visible  
- `maskEmail`: Masks part of an email username, keeping the domain visible  


## Installation
```bash
npm install starso
```

## Usage
```js
const { slugify,smartTrim,maskphone,maskmail } = require('starso');

console.log(slugify("Hello World!")); // "hello-world"
console.log(smartTrim("   Hello     World   ")); // Hello World
console.log(maskphone("987654321")); //98****321
console.log(maskmail("dd211346@gmail.com")); //dd2*****@gmail.com
```

## License
MIT
