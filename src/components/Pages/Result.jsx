import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Result.css';

function Result({name, score}) {
const navigate = useNavigate()

  useEffect(() => {
    if(!name){
      navigate('/')
    }
  },[name, navigate])

  const handleHome= () => {
    navigate('/')
  }
  return (
    <div className='result'>
      <span className='title'>
       Final Score : {score}
       <button onClick={handleHome}> Go To Home Page</button>
      </span>
    </div>
  )
}

export default Result