import React from 'react'
import './Header.css';
function Header({toggle}) {
  return (
    <div className = {`header ${toggle && "header__toggle"}`}>
      <h1>HEADLINER</h1>
    </div>
  )
}

export default Header
