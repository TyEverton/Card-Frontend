import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserTest() {
  useEffect(() => {
    axios.get('/usersBackEnd').then((response: any) => {
      setUsers(response)
    })
  }, [])

  const [users, setUsers] = useState<any>()
  const [firstName, setFirstName] = useState<string>('')

  const getUsers = () => {
    console.log('data', users.data[0].name)
  }

  return (
    <div>
      <button
        onClick={() => {
          getUsers()
        }}
      >
        Log Users
      </button>
    </div>
  )
}

export default UserTest
