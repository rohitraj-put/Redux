import React from 'react'
import './App.css'
import { fakeData } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './store/slices/UserSlice';

function App() {
  const dispatch = useDispatch()
  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload))
  };

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
            <li>{user}</li>
          </ul>
        })
      }

    </>
  )
}

export default App
