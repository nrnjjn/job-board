import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Addjob = () => {

    const id = localStorage.getItem('id')
    const navigate = useNavigate()
    const [data, setData] = useState('')

    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }

      let handleSubmit=async(event)=>{
        event.preventDefault()
        try{
            let response=await axios.post('http://localhost:4000/user/addjob',{ ...data, userId: id })
            console.log(response.data)
            alert("Added")
        }
        catch (error) {
            console.error('Error adding job:', error);
          }
     }
    

    return (
        <div className='reg'>
      <div className='text-center pt-24 font-bold text-3xl text-white'>
        New Job
      </div>
      <form className='pt-4' onSubmit={handleSubmit}>
        <div className='m-auto w-fit'>
          <div className='flex flex-row pb-3 flex-wrap'>
            <input onChange={handleChange} pattern="^[a-zA-Z ]*$" required name='Job' type="text" placeholder='Job' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          
          
          <div className='flex flex-row flex-wrap'>
            <textarea onChange={handleChange} required name="Description" id="" cols="30" rows="10" placeholder='Description' className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
        </div>
      </form>
    </div>
    )
}

export default Addjob