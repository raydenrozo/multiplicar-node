const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');
// const fs = require('express'); no nativos de node
// const fs = require(./'fs'); creados por el dev

let listarTabla = (base, limite = 10) => {

  let tabla = '';
  if (!Number(base)) {
    console.log(`El valor introducido de Base ${base}, no es un nùmero`);
    return;
  } 
  if (!Number(limite)) {
    console.log(`El valor introducido de Limite ${limite}, no es un nùmero`);
    return;
  } 

  console.log('============================='.green);
  console.log(`====== Tabla de ${base} =====`.blue);
  console.log('============================='.green);
  for (let i= 1; i <= limite; i++) {
      let total = base * i;
      tabla += `${base} * ${ i } = ${total}\n`;
  }
  console.log(`\n${tabla}`);
};

let crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un nùmero`);
            return;
        }
        if (!Number(limite)) {
          reject(`El valor introducido de Limite ${limite}, no es un nùmero`);
          return;
        } 
        let tabla = '';
        for (let i= 1; i <= limite; i++) {
            let total = base * i;
            tabla += `${base} * ${ i } = ${total}\n`;
        }
        
        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(`tabla-${base}-al-${limite}.txt`);
          }
        //   console.log(`The file tabla-${base}.txt has been saved!`);
        });
    });

};

module.exports = {
    // CrearArchivo: crearArchivo
    crearArchivo,
    listarTabla
}

