import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScoreDownAct, Store } from '../store/Store';




const MainMenu = () => {
  let usenav = useNavigate();
  const start = ()=>{
    
    usenav("/Quiz/0");
  };
  return (
    <div className='Menu' >
    <button
    onClick={start}
    >
    start
    </button>
    </div>
  )
}

export default MainMenu