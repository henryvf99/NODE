const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero')
        }

        let datas = '';
        for (let i = 1; i <= limite; i++) {
            datas += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, datas, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla ${base}-al-${limite}.txt`.green);
        });

    });

}

module.exports = {
    crearArchivo
}