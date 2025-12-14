import { useEffect, useState } from "react"
import axios from "axios"

function UserList() {
  // Estado para guardar los usuarios que vienen de la apiii
  const [users, setUsers] = useState([])

  // Estado para lo que el usuario escribe en el buscador
  const [search, setSearch] = useState("")

  // Se ejecuta una sola vez al montar el componente
  // Trae la lista de usuarios desde el backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }, [])

  // Normaliza texto para ignorar acentos y mayúsculas al hacer la búsqueda
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  }

  // Filtra usuarios por nombre usando el texto normalizado
  const filteredUsers = users.filter(user =>
    normalizeText(user.name).includes(normalizeText(search))
  )

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6">
        
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Lista de usuarios
        </h1>

        {/* Input de búsqueda */}
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Lista de usuarios */}
        <ul className="space-y-3">
          {filteredUsers.map(user => (
            <li
              key={user.id}
              className="flex flex-col bg-gray-50 border border-gray-200 rounded-lg p-3"
            >
              <span className="font-medium text-gray-900">
                {user.name}
              </span>
              <span className="text-sm text-gray-600">
                {user.email}
              </span>
            </li>
          ))}
        </ul>

        {/* Mensaje cuando no hay resultados */}
        {filteredUsers.length === 0 && (
          <p className="text-center text-sm text-gray-500 mt-4">
            No se encontraron usuarios
          </p>
        )}

      </div>
    </div>
  )
}

export default UserList
