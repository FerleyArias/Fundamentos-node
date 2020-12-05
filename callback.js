let empleados=[
  {id:1, nombre:'Miguel'},
  {id:2, nombre:'Yenny'},
  {id:3, nombre:'MCamila'},
]
let salarios=[
  {id:1,salario:1000},
  {id:2,salario:2000}
]
let getEmpleado=(id, callback)=>{
  let empleadoDb=empleados.find( empleado => empleado.id===id )
  if(!empleadoDb) callback(`No existe empleado con el ID ${id}`)
  else callback(null,empleadoDb)
}

let getSalario=( empleado , callback)=>{
  let salarioDb=salarios.find( salario => salario.id===empleado.id )
  if(!salarioDb) callback(`No hay salario con el empleado ${empleado.nombre}`)
  else callback(null,{
    nombre:empleado.nombre,
    salario:salarioDb.salario,
    id:empleado.id
  })
}

getEmpleado(3,( err , empleado)=>{
  if(err) return console.log(err);

  getSalario(empleado, (err, salario)=>{
    if(err) return console.log(err);
    console.log(`${empleado.nombre} gana: ${salario.salario}`);
  })
})



