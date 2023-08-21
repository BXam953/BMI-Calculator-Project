import Navbar from "@/app/components/nav"


export default function PL({children}){
    return(
        <div className=" flex bg-white text-black">
            <Navbar />
            <span className=' p-4 mt-12 ml-20'>
            {children}
            </span>
        </div>   
    )
}