import React from 'react'
import { useForm } from 'react-hook-form';

const DataModal = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <div className='bg-white top-0 h-screen w-full flex items-center justify-center fixed bg-opacity-65 text-black'>
        <div className=' p-4 font-bold shadow-2xl shadow-yellow-500 justify-between h-[300px] w-[350px] bg-white'>
          <div className='flex justify-between margin 20px'>
          <p className='text-xl '>Basic Modal</p>
          <p>X</p>
          </div>
            
        <div className='flex justify-between'>
          <p>Name:</p>
          <input className='border-2' type="text"{...register("name")} />

        </div>
        <div className='flex justify-between'>
          <p>Email:</p>
          <input className='border-2' type="text"{...register("Email")} />
          
        </div>
        <div className='flex justify-between'>
          <p>Phone:</p>
          <input className='border-2' type="text"{...register("phone")} />
          
        </div>
        <div className='flex justify-between'>
          <p>Website</p>
          <input className='border-2' type="text"{...register("website")} />
        </div>
        <div>
        <button className='border-2 ml-20 w-[200px] mt-5 bg-red-500 rounded-2xl' > summit</button>
        </div>
        </div>
    </div>

  )
}

export default DataModal