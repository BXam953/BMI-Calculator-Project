'use client'

import {FaUserPlus} from 'react-icons/fa'
import Link from 'next/link'
import axios from "axios";
import { useState } from 'react';

export default function SignUp(props){
    
    const [registerUsername, setRegisterUsername] = useState('')
    const [ registerPassword, setRegisterPassword ] = useState('')

    const register = () => {
        axios({
          method: 'post',
          data: {
            username: registerUsername,
            password: registerPassword
          },
          withCredentials: true,
          url: 'http://localhost:3001/register'
        }).then(res => {console.log(res)}).catch(err => {console.log(err)})
      }
    
    return(
        <div className='h-screen w-screen flex justify-center items-center align-middle bg-slate-200 '>
        <div className=' flex flex-col h-[80vh] w-[30vw] bg-white text-black rounded-md p-10 items-center'>
            < FaUserPlus size={100} className=' flex justify-center item-center'/>
            <br />
            <label htmlFor="name" className=' text-left'>Name</label>
            <input placeholder='name...' type="text" id="name" className=' border-2 border-slate-600 p-2 rounded-md'/>
            
            <label htmlFor="email" className=' text-left'>Email</label>
            <input placeholder='email...' type="text" id="email" className=' border-2 border-slate-600 p-2 rounded-md'/>
            
            <label htmlFor="Username" className=' text-left'>Username</label>
            <input placeholder='Username...' type="text" id="Username" onChange={e => {setRegisterUsername(e.target.value)}} className=' border-2 border-slate-600 p-2 rounded-md'/>
            
            <label htmlFor="password">Password</label>
            <input placeholder='Password...' type="password" id="password" onChange={e => {setRegisterPassword(e.target.value)}} className=' border-2 border-slate-600 p-2 rounded-md'/>
            
            <label htmlFor="confPassword">Confirm Password</label>
            <input placeholder='Confirm Password...' type="password" id="confPassword" className=' border-2 border-slate-600 p-2 rounded-md'/>
            <br />
            <button onClick={register} className='border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center'>Sign Up</button>
            {/* <Link href="/dashboard" className=" border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center" type="submit">Sign Up</Link> */}
            <br />
            Already Got an Account?<Link href="/login" className=' font-bold'>Login</Link>
        </div>
        </div>
    )
}