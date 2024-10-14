import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
function App() {
  return (
      <>
      <UserContextProvider>
            <center>
            <h1>Hello Hanuman Ji</h1>
            <Login />
            <Profile />
            </center>
      </UserContextProvider>
      </>
  )
}

export default App