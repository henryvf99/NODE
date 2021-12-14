const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

//console.log('limite', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar')
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido')
}



//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);

//crearArchivo(base)
//.then(archivo => console.log(`archivo creado: ${archivo}`))
//.catch(err => console.log(err));