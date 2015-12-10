"use strict"
let fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if (err) throw err

    let visited = { "0,0": 1 }
    let robo = { x: 0, y: 0}
    let santa = { x: 0, y: 0 }
    let houses = 1

    data.split('').forEach((c, i) => {
        let current = i % 2 == 1 ? robo : santa

        if (c == '^') {
            current.y += 1
        } else if (c == 'v') {
            current.y -= 1
        } else if (c == '>') {
            current.x += 1
        } else if (c == '<') {
            current.x -= 1
        } else {
            return
        }

        var coord = current.x + ',' + current.y

        if (!visited[coord]) {
            visited[coord] = 1
            houses += 1
        } else {
            visited[coord] += 1
        }
    })

    console.log(houses)
});
