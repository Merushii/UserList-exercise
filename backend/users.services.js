const userControllers = require('./users.controllers')

// Obtiene la lista completa de usuarios
// Llama al controller y responde con JSON
const getAllUsers = (req, res) => {
  userControllers.findAllUsers()
    .then(data => {
      res.status(200).json(data) // OK
    })
    .catch(err => {
      res.status(500).json({ error: err }) // Error del servidor
    })
}

// Crea un nuevo usuario
const postNewUser = (req, res) => {
  const userObj = req.body

  // Valida los datos
  if (!userObj.name || !userObj.email) {
    return res.status(400).json({ message: 'Name and email required' })
  }

  // Llama al controller para guardar el usuario
  userControllers.createUser(userObj)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      res.status(400).json({ error: err }) // manejo de error en la aplicación
    })
}

module.exports = {
  getAllUsers,
  postNewUser
}
