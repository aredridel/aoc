"use strict"
let fs = require('fs')
let m = { ')': -1, '(': 1}
fs.readFile(process.argv[2], 'utf-8', function (e, d) {
    if (e) throw e
    let n = 0, o = false
    try {
        d.trim().split('').map(e => m[e]).reduce(function (e, a, i) {
            if (a + e < 0) {
                throw i + 1
            } else {
                return a + e
            }
        }, 0)
    } catch (e) {
        console.log(e)
    }
});
