import Link from 'next/link'
import {FaHome} from 'react-icons/fa'

export default function Home() {
  return (
    
    <div className="h-screen w-screen bg-slate-100 text-black flex justify-center align-center text-center items-center">
      <div className=' h-[50vh] w-[25vw] flex flex-col justify-center align-middle items-center bg-slate-200 rounded-md'>
      <FaHome size={100}/>
      <p className='w-[20vw] font-bold'>Hey! Welcome to YourBMI.com, Your one stop shop for keeping track of your health</p>
      <p className=''>Have an account? </p>
      <Link href="/login" className=" border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center" type="submit">Login</Link>
      <p>If Not just signup here! </p>
      <Link href="/signup" className=" border-2 border-slate-600 w-[8vw] h-[5vh] rounded-md hover:bg-gray-100 text-center flex justify-center items-center" type="submit">Sign Up</Link>
      </div>
    </div>
    
  )
} 

