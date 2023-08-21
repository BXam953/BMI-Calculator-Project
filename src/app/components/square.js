
import { useState } from 'react'

// these are the tiles that come under the graph

export default function Square(props){
    const size = 315;
    const responsiveSize = 100;
    const [squareType, setSquareType] = useState([
        {
            "id": 1,
            "type": "Weight",
            "data": 80
        }, 
        {
            "id": 2,
            "type": "Height",
            "data": "180cm"
        }, 
        {
            "id": 3,
            "type": "Age",
            "data": 20
        }, 
        {
            "id": 4,
            "type": "BMI",
            "data": 24
        },
    ]) // json data that is mapped belowo
    
    return(
        <div>
    <h1 className=' text-left text-4xl font-bold'>Latest Data</h1>
    <hr />
        <div className='grid grid-cols-2 grid-rows-2 mt-5 gap-5 lg:flex lg:justify-between'>
            
            {squareType.map( // is mapped and all the items are listed and styled
                (square) => {
                    return(
                        <div key={square.id} className={`h-[185px] w-[185px] rounded-md bg-gray-200 flex flex-col align-center text-center justify-between p-10 lg:w-[315px] lg:h-[315px]`}>
                            <p className=" font-bold text-xl lg:text-xl">{square.type}</p>
                            <p className="font-bold text-3xl lg:text-6xl">{square.data}</p>
                            <p></p>
                        </div>
                    )   
                }
            )}
        </div>
        </div>

        
    )
}