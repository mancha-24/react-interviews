import { useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { type User } from './types'

function App () {
  const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUser(res.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='App'>
      <h1>Prueba Técnica</h1>
      <header>
      </header>
      <main>
        <UserList users={user} showColors={false}/>
      </main>
    </div>
  )
}

export default App
