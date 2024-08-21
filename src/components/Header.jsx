import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <Link to='/' className='title'>SmartQuiz: Challenge Your Brain</Link>
        <hr className='divider' />
    </div>
  )
}

export default Header