import { type User } from '../types'

interface Props {
  users: User[]
  showColors: boolean
}

export function UserList ({ users, showColors }: Props) {
  return (
    <table width='100%'>
        <thead>
            <tr>
                <th className='pointer'>Foto</th>
                <th className='pointer'>Nombre</th>
                <th className='pointer'>Apellido</th>
                <th className='pointer'>País</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => {
                  return (
                    <tr key={user.email}>
                        <td>
                            <img src={user.picture.thumbnail} />
                        </td>
                        <td>
                            {user.name.first}
                        </td>
                        <td>
                            {user.name.last}
                        </td>
                        <td>
                            {user.location.country}
                        </td>
                        <button>Borrar</button>
                    </tr>
                  )
                })
            }
        </tbody>
    </table>
  )
}
