import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditJob = () => {
    const id = localStorage.getItem('id')
    let {id2} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState('')
    const [job, setJob] = useState('')

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    let handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let response=await axios.put(`http://localhost:4000/user/editjob/${id2}`,data)
            console.log(response.data)
            alert("Updated")
        }
        catch (error) {
            console.error('Error editing job:', error);
        }
    }

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get(`http://localhost:4000/user/viewjobd/${id2}`);
                setJob(response.data)
            }
            catch(error){
                console.error('Error fetching data')
            }
        };
        fetchData();
    },[]);

    return (
        <div className='reg'>
            <div className='text-center pt-24 font-bold text-3xl text-white'>
                Edit Job
            </div>
            <form className='pt-4' onSubmit={handleSubmit}>
                <div className='m-auto w-fit'>
                    <div className='flex flex-row pb-3 flex-wrap'>
                        <input onChange={handleChange} pattern="^[a-zA-Z ]*$"  name='Job' type="text" placeholder={job?.Job} className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
                    </div>


                    <div className='flex flex-row flex-wrap'>
                        <textarea onChange={handleChange}  name="Description" id="" cols="30" rows="10" placeholder={job?.Description} className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
                    </div>
                    <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditJob