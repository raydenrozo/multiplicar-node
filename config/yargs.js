

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar',opts)
.command('crear', 'Crea la tabla de multiplicar en base al limite',opts)
.help()
.argv;


// base: {
//     demand: true,
//     alias: 'c'
// },
// limite: {
//     alias: 'l',
//     default: 10
// }

module.exports = {
    argv
}