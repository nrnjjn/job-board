import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const JobList = () => {
const [data,setData]=useState([])    

useEffect(()=>{
    const fetchData = async () =>{
        try{
            const response = await axios.get('http://localhost:4000/user/joblist');
            setData(response.data)
        }
        catch(error){
            console.error('Error fetching data')
        }
    };
    fetchData();
},[]);

  return (
    <div className="reg">
            
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-64">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase dark:bg-gray-950/90 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">SLNO</th>
                            <th scope="col" className="px-3 py-3">Job</th>
                            <th scope="col" className="px-3 py-3">Description</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item,index)=>(                      
                            <tr key={item._id} className="dark:border-gray-700 text-white bg-gray-950/40 hover:bg-slate-800/50">
                                <td scope="row" className="px-1 py-4">{index+1}</td>
                                <td>{item?.Job}</td>
                                <td>{item?.Description}</td>
                              
                                    
                                        
                                
                            </tr>
                              ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default JobList