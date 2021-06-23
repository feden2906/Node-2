const fs = require('fs');
const path = require('path');

const pathTime20 = path.join(__dirname, '2000');
const pathTime18 = path.join(__dirname, '1800');

fs.mkdir(path.join(__dirname, 'boys'), {recursive: true}, (err) => {
    console.log(err);
})

fs.mkdir(path.join(__dirname, 'girls'), {recursive: true}, (err) => {
    console.log(err);
})

const changeGender = (userPath) => {
    fs.readdir(userPath, (err, files) => {
        if (err) {
            console.log(err);
            console.log('********ERROR*********');
        }

        files.map(files => {
            let user = require(path.join(userPath, files));

            user.gender === 'male'
                ? fs.rename(path.join(userPath, files), path.join(__dirname, 'boys', files), err => {
                    if (err) {
                        console.log(err);
                        console.log('********ERROR*********');
                    }
                  })
                : fs.rename(path.join(userPath, files), path.join(__dirname, 'girls', files), err => {
                    if (err) {
                        console.log(err);
                        console.log('********ERROR*********');
                    }
                })
        })
    })
}

changeGender(pathTime18);
changeGender(pathTime20);
