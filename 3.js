"use strict"
let fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if (err) throw err

    let visited = { "0,0": 1 }
    let x = 0
    let y = 0
    let houses = 1

    data.split('').forEach(c => {
        if (c == '^') {
            y += 1
        } else if (c == 'v') {
            y -= 1
        } else if (c == '>') {
            x += 1
        } else if (c == '<') {
            x -= 1
        } else {
            return
        }

        if (!visited[x + ',' + y]) {
            visited[x + ',' + y] = 1
            houses += 1
        } else {
            visited[x + ',' + y] += 1
        }
    })

    console.log(visited)
    console.log(houses)
});
