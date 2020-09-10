const argv = require('./config/yargs').argv;
const colors = require('colors');
const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
                .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
        break;
}
// console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);

//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);
// multiplicar.CrearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`));

// CrearArchivo(base)
//      .then(archivo => console.log(`Archivo creado: ${archivo}`))
//      .catch(err => console.log(err));