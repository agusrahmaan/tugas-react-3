import React from 'react'

const Header = () => {

const nama = "Agus Rahman Hidayat"

  return (
    <div style={{
    backgroundColor: 'red',
    color: 'white',
    fontSize: 60,
    fontFamily: 'serif',
    margin: 5,
    height: 80
    }}>
    <header>{nama}</header>
    </div>
  )
}

export default Header