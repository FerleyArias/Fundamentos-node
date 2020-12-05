let empleados=[
  {id:1, nombre:'Miguel'},
  {id:2, nombre:'Yenny'},
  {id:3, nombre:'MCamila'},
]
let salarios=[
  {id:1,salario:1000},
  {id:2,salario:2000}
]
let getEmpleado=(id)=>{
  return new Promise((resolve,reject)=>{
      let empleadoDb=empleados.find(empleado => empleado.id===id);
      if(! empleadoDb) reject(`No existe empleado con ID ${id}`)
      else resolve(empleadoDb);
  })
}

getEmpleado(1).then((empleado)=>{console.log(`Empleado: ${empleado.nombre}`);},
    (e) => {console.log(e);} );

let getSalario = (empleado)=>{
  return new Promise((resolve,reject)=>{
      let salarioEmp=salarios.find(salario => salario.id===empleado.id);
      if (!salarioEmp) reject (`No existe salario para  ${empleado.nombre}`);
      else resolve({
          nombre:empleado.nombre,
          salario:salarioEmp.salario,
          id:empleado.id
      })
  })
}

getEmpleado(4).then( empleado =>{
  getSalario(empleado).then( salario =>{
      console.log(`${empleado.nombre} gana: ${salario.salario}`);
  }, err => console.log(err));
}, err=> console.log(err));

getEmpleado(4).then(empleado => {
  return getSalario(empleado);
}).then((resp)=>{
  console.log(`El salario de ${resp.nombre} es: ${resp.salario}`)
}).catch( (err) => console.log(err));