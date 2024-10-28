import React from 'react'
import Card from './Card'
import { data } from '../../data'
import DataModel from './datamodel'

const Body = () => {
  console.log(data);
  
  return (
    <div className='flex flex-wrap justify-center items-center'>
    <DataModel/>
      {
        data.map((val) => (
          <Card value = {val} />
        ))
      }
        
    </div>
  )
}

export default Body