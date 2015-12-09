"use strict";
let fs = require('fs')
let values = {}
let operations = {
    AND: (a, b) => a & b,
    OR: (a, b)  => a | b,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b,
    NOT: (a) => ~a
}
let parse = function (line) {
    var m = /(.*) -> (.*)/.exec(line)
    if (!m) {
        throw new Error("Parse error: " + line)
    } else {
        values[m[2]] = m[1].split(/ /)
    }
}

let operate = function (a, b, c) {
    if (arguments.length == 1) {
        return val(a)
    } else if (arguments.length == 2) {
        return operations[a](val(b))
    } else if (arguments.length == 3) {
        return operations[b](val(a), val(c))
    } else {
        throw new Error("unknown operation");
    }
}

let val = function (rval) {
    if (!isNaN(Number(rval))) {
        return Number(rval)
    } else if (/^[a-z]+$/.test(rval)) {
        let v = 65535 & operate.apply(null, values[rval])
        values[rval] = [v]
        return v
    } else {
        throw new Error("Unknown thing: " + rval)
    }
}

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if (err) {
        throw err;
    } else {
        data.trim().split(/\n/).forEach(parse)
        console.log(val(process.argv[3]))
    }
})
