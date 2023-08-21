"use client";

import { useState } from "react";
import axios from "axios";
import {useRouter} from 'next/navigation'


export default function AD(props){
    
    const user = props.params.user;
    const [entryHeight, setEntryHeight] = useState('');
    const [entryWeight, setEntryWeight] = useState('');
    const [entryNotes, setEntryNotes] = useState('');

    const router = useRouter();

    const addEntry = () => {
        axios({
          method: 'post',
          data: {
            height: entryHeight,
            weight: entryWeight,
            notes: entryNotes,
            username: user
          },
          withCredentials: true,
          url: 'http://localhost:3001/addEntry'
        }).then(response => {
            console.log(response.status);
            if(response.status === 200){
                router.push(`/dashboard/${user}`);
            }
        });
    }

    return(
        <div className='h-screen w-screen flex justify-center items-center align-middle bg-slate-200 '>
        <div className=' flex flex-col h-[80vh] w-[30vw] bg-white text-black rounded-md p-10 items-center align-center justify-center'>
        <h1 className=" text-3xl pb-5">Add Data</h1> 
        <div>
            <label htmlFor="">Height</label><br />
            <input placeholder='Height...' type="text" id="name" onChange={e => {setEntryHeight(e.target.value)}} className=' w-[20vw] border-2 border-slate-600 p-2 rounded-md'/> <br />
            <label htmlFor="">Weight</label><br />
            <input placeholder='Weight...' rows="10" type="text" id="email" onChange={e => {setEntryWeight(e.target.value)}} className=' w-[20vw] border-2 border-slate-600 p-2 rounded-md'/> <br />
            <label htmlFor="">Notes</label><br />
            <textarea cols="30" rows="10" placeholder="Notes" onChange={e => {setEntryNotes(e.target.value)}} className=' border-2 border-slate-600 p-2 rounded-md'></textarea> <br />
            {/* <input placeholder='Notes...' type="textarea" id="Username" onChange={e => {setRegisterUsername(e.target.value)}} className=' border-2 border-slate-600 p-2 rounded-md'/> */}
            <br />
            <button onClick={addEntry} className='border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center'>Add Entry</button>
            {/* <Link href="/dashboard" className=" border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center" type="submit">Sign Up</Link> */}
            <br />
        </div>
        </div>
        </div>
    )

    // add data form
}