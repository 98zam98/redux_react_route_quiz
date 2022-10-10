import {Qbank}  from "../utils/Qbank";
import { useNavigate } from 'react-router-dom'
import Store from '../store/Store';
import { ScoreDownAct } from '../store/score_reducer';



const EndScreen = () => {
  let usenav = useNavigate();
  const restart = ()=>{
    
    Store.dispatch(ScoreDownAct());
    usenav("/");
  };
  return (
    <div className='EndScreen' >
      
      <h1>done</h1>
      <h3>score</h3>
      <h3>{ Store.getState().score }/{ Qbank.length }</h3>
      <button
      onClick={restart}
      >
      restart
      </button>
    </div>
  )
}

export default EndScreen
