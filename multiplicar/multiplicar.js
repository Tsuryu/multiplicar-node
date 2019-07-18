const fs = require('fs');
var colors = require('colors');

let listarTabla = async(base, limite) => {
    console.log('====================='.green);
    console.log(`==== Tabla del ${base}`.green);
    console.log('====================='.green);
    let tabla = generarTabla(base, limite);
    console.log(tabla);
}

let generarTabla = (base, limite = 10) => {
    let tableData = '';

    if (!Number(base) || !Number(limite)) {
        throw new Error('No es un numero');
        return;
    }

    for (let i = 1; i <= limite; i++) {
        tableData += `El resultado de ${i} * ${base} es: ${i*base} \n`;
    }

    return tableData;
}

//module.exports.crearArchivo = async base => {
let crearArchivo = async(base, limite) => {
    let tabla = generarTabla(base, limite);

    //const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(`./tablas/tabla-${base}.txt`, tabla, (err) => {
        if (err)
            throw Error(err);
        else
            return `tablas/tabla-${base}.txt`;
    });

    return `./tablas/tabla-${base}.txt`;
}

module.exports = {
    crearArchivo,
    listarTabla
}