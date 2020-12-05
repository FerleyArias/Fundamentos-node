const {crearArchivoAsync, crearArchivo,listarTabla} = require('./multiplicar/index')
const argv=require('./config/yargs'),argv

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base,argv.limite)
    break;
  case 'crear':
    crearArchivo(argv.base,argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(err => {
        console.log(err.message);
      })
    break;
  default:
    console.log('Ordden no reconocida');
    break;
}















