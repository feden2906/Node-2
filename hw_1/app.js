const fs = require('fs')
const path = require('path')

const pathTime20 = path.join(__dirname, '2000');
const pathTime18 = path.join(__dirname, '1800');

const changeTime = (path) => {
    fs.readdir(path, (err, files) => {
        if (err) {
            console.log(err);
            console.log('********ERROR*********')
        }
        files.map(files => {
            fs.rename(`${path}/${files}`, newTime(path, files), err => {
                console.log(err);
                console.log('********ERROR*********')
            })
        })
    })
}

function newTime(path, files) {
    if (path === pathTime20) {
        return `${pathTime18}/${files}`
    }
    return `${pathTime20}/${files}`
}

changeTime(pathTime18)
changeTime(pathTime20)

