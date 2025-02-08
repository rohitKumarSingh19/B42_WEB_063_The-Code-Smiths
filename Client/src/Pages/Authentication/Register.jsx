import React, { useContext } from 'react'

const Register = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext)

  return (
    <div className='h-screen flex flex-col justify-center items-center text-5xl'>
      <h1 className='mb-4'>{isLoggedIn ? "you are logged in" : "you are not logged in"}</h1>
      <div className='text-5xl'>
        {isLoggedIn ? (
          <button onClick={handleLogout} className='bg-red-500 p-4 mr-3' >Logout</button>
        ) : (
          <button onClick={handleLogin} className='bg-red-500 p-4 mr-3'>Login</button>
        )}

      </div>
    </div>
  )
}

export default Register