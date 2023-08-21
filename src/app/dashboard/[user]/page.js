'use client'

import Link from 'next/link'
import PL from './pageLayout'

import History from '../../components/history';
import Square from '../../components/square'
import LineChart from '../../components/trendchart';

export default function Home(props){
    
    const username = props.params.user;

    return(
        <PL>
            <h1 className=' text-5xl lg:w-screen'>{props.params.user}s Dashboard</h1> 
            <br />
            <Link className=' border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center' href={`/dashboard/${username}/addData`}>Add Data</Link>
            <div className=' flex flex-col items-center align-middle justify-center m-auto'>
                <div className=' flex w-[80vw] h-[25vh] mt-5  lg:w-[92vw] lg:h-[60vh]'><LineChart></LineChart></div>
                <Square />
            </div>
            <History />
        </PL>
        
    )
}

