import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='title'>
        <Link to='/' className='innertitle'>SmartQuiz: Challenge Your Brain</Link>
        <hr className='divider' />
    </div>
  )
}

export default Header