const parametros={
  base:{
    demand:true,  //OBLIGATORIO
    alias:'b'
  },
  limite:{
    default:10,
    alias:'l'
  }
}

const argv=require('yargs')
  .command('listar','Imprime en consola la tabla de multiplicar',parametros)
  .command('crear','Crea un archivo con la tabla de multiplicar',parametros)
  .help()
  .argv

module.exports={argv}