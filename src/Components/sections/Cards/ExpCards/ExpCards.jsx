import React from 'react'
import './ExpCards.css'
import { GiSpiderWeb } from "react-icons/gi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
function ExpCards({data}) {
  const { position, company_name, working_period, exp_detail ,job_type} = data;
  return (
      <div className='exp-card'>
          {job_type === 'web' ? <GiSpiderWeb className='exp-icons' /> : <MdOutlineScreenSearchDesktop className='exp-icons'/>}
        <h2>{position}</h2>
        <h4>| {company_name} |</h4>
        <span>{working_period}</span>
        <p>{exp_detail}</p>
      </div>
  )
}

export default ExpCards