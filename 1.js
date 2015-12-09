"use strict"
let fs = require('fs')
let m = { ')': -1, '(': 1}
fs.readFile(process.argv[2], 'utf-8', function (e, d) {
    if (e) throw e
    console.log(d.trim().split('').map(e => m[e]).reduce((e, a) => a + e, 0))
});
