import {useState,useEffect} from 'react';
import { Link , useNavigate } from "react-router-dom";

const Missing = () => {
  let usenav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      usenav("/")
    }, 1000);
  }, [])
  
  return (
    <div>Missing</div>
  )
}

export default Missing