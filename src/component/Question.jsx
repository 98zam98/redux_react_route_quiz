import { useNavigate, useParams } from 'react-router-dom'
import {Qbank}  from "../utils/Qbank";
import Store from '../store/Store';
import React, { useContext, useState } from 'react';
import Missing from './Missing';
import { ScoreUpAct } from '../store/score_reducer';
import { op0Act, op1Act, op2Act } from '../store/option_reducer';

const Question = () => {
    const [Option, setOption] = useState(2);
    let usenav = useNavigate();
    const nextQ=(Question)=>{
      //console.log( 'called' );
      if(Store.getState().option===Qbank[Question].answer)
      {
        Store.dispatch(ScoreUpAct());
        Store.dispatch(op2Act());
      }
      usenav(`/Quiz/${(Question+1)%(Qbank.length)}`);
    };
    const finishQ=(Question)=>{
      //console.log( 'called' );
      if(Store.getState().option===Qbank[Question].answer)
      {
        Store.dispatch(ScoreUpAct());
        Store.dispatch(op2Act());
      }
      //setQuestion((Question+1)%(Qbank.length));
      usenav("/EndScreen");
    };
    
  const paramz = useParams();
    return (
      
      <div className='Quiz' >
      
  {
    (paramz.id>=(Qbank.length))?<Missing />:<div>
        
        <h1>{Qbank[paramz.id].prompt}</h1>
        <div className='options' >
          <button onClick={()=>Store.dispatch(op0Act())} > {Qbank[paramz.id].options[0]} </button>
          <button onClick={()=>Store.dispatch(op1Act())} > {Qbank[paramz.id].options[1]} </button>
        </div>
        {
          paramz.id==(Qbank.length-1)?
          (<button onClick={()=>{finishQ(paramz.id)}}>finish</button>)
          :
          (<button onClick={()=>{nextQ(paramz.id)}}>next</button>)
        }
        
    </div>
  } 
        
      </div>
    )
  }

export default Question