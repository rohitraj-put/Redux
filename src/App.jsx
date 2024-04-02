import React from 'react'
import './App.css'
import { fakeData } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './store/slices/UserSlice';
import { removeUser } from './store/slices/UserSlice';
import { deleteUser } from './store/slices/UserSlice';

function App() {
  const dispatch = useDispatch()

  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload))
  }

  const deleteUserId = (id) => {
    dispatch(removeUser(id))
  }

  const deleteAll = () => {
    dispatch(deleteUser())
  }

  const data = useSelector((state) => {
    return state.users
  })

  return (
    <>
      <h1>hello vite</h1>
      <button onClick={() => addNewUser(fakeData())}>Add user</button>
      <hr />
      {
        data.map((user, id) => {
          return <ul key={id}>
            <li>{user} </li>
            <button onClick={() => deleteUserId(id)}>Delete</button>
          </ul>

        })
      }
      <button onClick={() => deleteAll()} > delete all data</button >
    </>
  )
}

export default App
