const fs = require('fs')

let crearArchivo = (base,limite) => {
  return new Promise((resolve,reject)=>{
    if(!Number(base))throw new Error(`El valor introducido ${base} no es un numero`)
    let data=''

    for (let i = 0; i <=10; i++) {
      data+=`${base} * ${i} = ${base*i}\n`
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) throw reject(err);
      resolve(`tabla-${base}.txt`);
    })
  })
}

let crearArchivoAsync = async base => {
  if(!Number(base))throw new Error(`El valor introducido ${base} no es un numero`)
  else if(!Number(limite))throw new Error(`El valor introducido ${limite} no es un numero`)
  
  let data=''
  for (let i = 0; i <=limite; i++) {
    data+=`${base} * ${i} = ${base*i}\n`
  }
  
  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw new Error(err);
  })
  return `tabla-${base}.txt`;
}

let listarTabla = async base => {
  if(!Number(base))throw new Error(`El valor introducido ${base} no es un numero`)
  else if(!Number(limite))throw new Error(`El valor introducido ${limite} no es un numero`)
  
  for (let i = 0; i <=limite; i++) {
    console.log(`${base} * ${i} = ${base*i}`)
  }
}



module.exports = {crearArchivo,crearArchivoAsync,listarTabla}
