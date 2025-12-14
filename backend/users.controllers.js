// Base de datos temporal
// Aquí guardamos los usuarios en memoria solo para pruebas
// Cuando se reinicia el servidor todo esto se borra
const usersDb = [
  { id: 1, name: "Octavio Gómez", email: "octagoforce123@gmail.com" },
  { id: 2, name: "Hilda Fernández Javier", email: "hilja12@gmail.com" },
  { id: 3, name: "Gabriela Violeta Duarte Cohuo", email: "gabsvi@gmail.com" }
]

// Contador para asignar los id únicos a nuevos usuarios
let userId = 4

// Función que retorna todos los usuarios registrados
const findAllUsers = async () => {
  return usersDb
}

// Función que crea un nuevo usuario
// Recibe un objeto con name y email
const createUser = async (userObj) => {
  const newUser = {
    id: userId++, // Se incrementa automáticamente el ID
    name: userObj.name,
    email: userObj.email
  }

  // Agregamos el nuevo usuario a la "base de datos" :D
  usersDb.push(newUser)

  // Retornamos el usuario creado
  return newUser
}

module.exports = {
  findAllUsers,
  createUser
}
