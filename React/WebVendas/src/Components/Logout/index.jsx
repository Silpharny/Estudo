import React from 'react'

export const Logout = () => {
  
    const Sair = () => {
        localStorage.removeItem('token')
        window.location.replace('http://localhost:5173')
    }

  return (
    <button className='btn btn_gray' onClick={Sair}>Sair</button>
  )
}
