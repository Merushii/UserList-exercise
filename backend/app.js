// Importamos Express para crear el servidor
const express = require('express')

// Importamos CORS para permitir peticiones desde el frontend y que la página no lo bloquee D:
const cors = require('cors')

// Importamos las rutas de usuarios
const userRouter = require('./users.router')

const app = express()

// Habilitamos CORS para evitar bloqueos entre frontend y backend
app.use(cors())

app.use(express.json())

// Ruta básica para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
  res.json({ message: 'Server OK' })
})

// Usamos el router de usuarios bajo la ruta /api
// Ejemplo: http://localhost:3000/api/users
app.use('/api', userRouter)

// servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
