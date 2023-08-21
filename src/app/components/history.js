import { useState } from 'react'

export default function History(props){
    
    const [historyType, setHistoryType] = useState([
       
        {
            "id": 2,
            "day": 15,
            "month": "May",
            "Year": "2022",
            "description": "this is description number 2"
        }, 
        {
            "id": 3,
            "day": 13,
            "month": "May",
            "Year": "2022",
            "description": "this is description number 3"
        }, 
        {
            "id": 4,
            "day": 24,
            "month": "May",
            "Year": "2022",
            "description": "this is description number 4"
        },
        {
            "id": 5,
            "day": 21,
            "month": "May",
            "Year": "2022",
            "description": "this is description number 4"
        },
        {
            "id": 5,
            "day": 30,
            "month": "December",
            "Year": "2021",
            "description": "this is description number 6"
        }
        
    ]) // histroy json objects 

    return(
        
        // mapped again down below 

        <div className='flex flex-col mt-5'>
        <h1 className='w-[30vw] text-4xl mt-5 font-bold'>History</h1>
        <hr />
        {
            historyType.map(
                (item) => {
                    return(
                        <div key={item.id} className='w-[80vw] h-[10vh] mt-5 bg-gray-200 flex flex-row gap-4 p-4 items-center lg:w-[92vw] lg:h-[20vh]'>
                            <div className=' h-[50px] w-[50px] flex flex-col justify-center text-center items-center bg-white rounded-md lg:h-[100px] lg:w-[100px]'>
                                <p className=' text-base'>{item.month}</p>
                                <p className=' text-4xl font-bold'>{item.day}</p>
                                <p className=' text-base'>{item.Year}</p>
                            </div> 
                            <div className=' rounded-md h-[50px] w-[90%] bg-white flex justify-left pl-5 capitalize text-black text-left items-center lg:text-3xl lg:h-[100px]'>{item.description}</div> 
                        </div>
                    )   
            }
            )
        }
        </div>
    )
}
