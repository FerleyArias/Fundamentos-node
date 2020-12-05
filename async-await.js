let empleados=[
  {id:1, nombre:'Miguel'},
  {id:2, nombre:'Yenny'},
  {id:3, nombre:'MCamila'},
]

let salarios=[
  {id:1,salario:1000},
  {id:2,salario:2000}
]

let getEmpleado= async (id)=>{
  let empleadoDb=empleados.find(empleado => empleado.id===id);
  if(! empleadoDb) throw new Error(`No existe empleado con ID ${id}`)
  else return empleadoDb;
}

let getSalario = async (empleado)=>{
  let salarioEmp=salarios.find(salario => salario.id===empleado.id);
  if (!salarioEmp) throw new Error(`No existe salario para  ${empleado.nombre}`);
  else return{
      nombre:empleado.nombre,
      salario:salarioEmp.salario,
      id:empleado.id
  }
}

let getInfo=async(id)=>{
  let empleado= await getEmpleado(id);
  let resp=await getSalario(empleado)
  return `${resp.nombre} tiene un salario de ${resp.salario}`

}


getInfo(1).then( (info)=>console.log(info)).catch( e => console.log(e.message));
