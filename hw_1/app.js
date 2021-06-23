const fs = require('fs');
const path = require('path');

const pathTime20 = path.join(__dirname, '2000');
const pathTime18 = path.join(__dirname, '1800');

const changeTime = (pathFile) => {
    fs.readdir(pathFile, (err, files) => {
        if (err) {
            console.log(err);
            console.log('********ERROR*********');
        }
        files.map(files => {
            fs.rename(path.join(pathFile, files), path.join(pathFile === pathTime18 ? pathTime20 : pathTime18, files), err => {
                console.log(err);
                console.log('********ERROR*********');
            })
        })
    })
}

// function newTime(pathTime, files) {
//     if (pathTime === path.join(__dirname, '2000')) {
//         return path.join(__dirname, '1800', files);
//     }
//     return path.join(__dirname, '2000', files);
// }

changeTime(pathTime18);
changeTime(pathTime20);

