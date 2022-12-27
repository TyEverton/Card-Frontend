import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserTest() {
  const [users, setUsers] = useState<any>([])

  useEffect(() => {
    axios.get('/usersBackEnd').then((response: any) => {
      setUsers(response.data)
      console.log('data', users)
    })
  }, [])

  return (
    <div>
      {users.map((user: any) => (
        <div>{user.username}</div>
      ))}
    </div>
  )
}

export default UserTest
