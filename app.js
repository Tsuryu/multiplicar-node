const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
const safe = require('colors/safe');

let argv2 = process.argv;
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo listado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}