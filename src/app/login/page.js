"use client"

import Link from 'next/link'
import { useState } from 'react'
import axios from "axios";
import {FaUserCircle} from 'react-icons/fa'
import { useRouter } from "next/navigation";

export default function Login(){

    const router = useRouter();
    
    const [loginUsername, setLoginUsername] = useState('')
    const [ loginPassword, setLoginPassword ] = useState('')

    const login = () => {
        axios({  // this is fetching data from the express server we created. 
          method: 'post',
          data: {
            username: loginUsername, // feeding the attrivutes to the server to be filtered through in the mysql query
            password: loginPassword
          },
          withCredentials: true,
          url: 'http://localhost:3001/login'
        }) .then(response => {
                if(response.status === 200){ // if status is 200 aka user is logged in redirect 
                    router.push(`/dashboard/${loginUsername}`, { // the redirect is to a link with the username
                        username: loginUsername,
                        password:loginPassword, // sending username and password to the dashboard 
                    })
                }
                
              }
            ).catch(
                
            )
        
    }
    
    return(
        <> 
        <div className='h-screen w-screen flex justify-center items-center align-middle bg-slate-200 '>
        <div className=' flex flex-col h-[60vh] w-[30vw] bg-white text-black rounded-md p-10 items-center'>
            < FaUserCircle size={100} className=' flex justify-center item-center'/>
            <br />
            <label htmlFor="Username" className=' text-left'>Username</label>
            <input placeholder='Username...' type="text" id="Username" onChange={e => setLoginUsername(e.target.value)} className=' border-2 border-slate-600 p-2 rounded-md'/>
            <br />
            <label htmlFor="password">Password</label>
            <input placeholder='Password...' type="password" id="password" onChange={e => setLoginPassword(e.target.value)} className=' border-2 border-slate-600 p-2 rounded-md'/>
            <br />
            {/* <Link href="/dashboard" className=" border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center" type="submit">Login</Link> */}
            <button onClick={login} className='border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center'>Login</button>
            <br />
            Not made an account yet?<Link href="/signup" className=' font-bold'>Sign in</Link>
        </div>
        </div>
        </>
    )
}

