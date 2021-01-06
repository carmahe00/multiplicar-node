const colors = require('colors/safe');
//Destructuración
const { argv} = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//comando no definido
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `+ colors.green(archivo)))
            .catch(e => console.log(e))
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}


//obtiene los datos por consola con process en la segunda posición
/* let parametro = process.argv[2]
let base = parametro.split('=')[1]; */

