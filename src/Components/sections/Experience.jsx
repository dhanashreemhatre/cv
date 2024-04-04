import React, { useEffect, useState } from 'react'
import ExpCards from './Cards/ExpCards/ExpCards'
import Expdata from '../assets/data/Exp-data.json'

function Experience() {
  const[data,setData]=useState([])
  useEffect(()=>{
    setData(Expdata)
  })
  return (
    <div id='experience'>
      <h3>/* Experience */</h3>
      {data.map((item,index)=>(
          <ExpCards key={index} data={item}/>
      ))}  
    </div>
  );
}

export default Experience