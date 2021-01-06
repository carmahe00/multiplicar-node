const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    //crea comandos (si es requerido, alias , valor por defecto)
    .command('listar', 'imprime en consola la tabla de multiplicar', opts).
    command('crear', 'Genera un archivo de texto', opts)
    //mustra ayuda con --help
    .help()
    .argv;

module.exports={
    argv
}