//requeridos
/**
 * @param fs libreria Filesystem propia de node
 */
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) =>{

        console.log("==============".green);
        console.log(`==tabla de ${ base }==`.green);
        console.log("==============".green);

        //Identifica si es número
        if(!Number(base) || !Number(limite)){
            reject('No esta bien especificada la base y el limite');
            return;
        }
    
        for (let i = 1; i <= limite; i++){
            console.log(`${base} * ${i} = ${base * i} \n`);
        }
    
}

let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        //Identifica si es número
        if(!Number(base)){
            reject('No es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        /**
         * .writeFile(ruta, datos a guardar, callback)
         */
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`table-${base}-al-${limite}.txt`);
        });
    });
}

//exporta objetos para usar en otras clases
module.exports = {
    crearArchivo,
    listarTabla
}