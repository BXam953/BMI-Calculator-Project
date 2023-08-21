import {FaUserSlash, FaHome} from 'react-icons/fa'

import Link from 'next/link'

export default function Navbar(){
    return (
        <div className='flex flex-col gap-5 h-screen fixed bg-gray-200 text-black w-20 items-center justify-between p-4'>
            <div className=' flex flex-col'> 
                <Link href="/"><FaHome size={40}/></Link>
                <br />
                <hr />
                <br />
                
            </div>
            <div className=' flex flex-col'>

                
                <Link href="/"><FaUserSlash size={40}/></Link>
            </div>
        </div>
    )
}