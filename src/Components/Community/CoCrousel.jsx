import React, { useEffect, useState } from 'react'
import { INVESTER, COMPANY, EMPLOYEE } from '../../Utils/constants'
import { company, invester } from '../../API/apis';
import fetchData from '../../Utils/fetchData';

const CoCrousel = ({type = INVESTER}) => 
{
    const [data, setData] = useState([]);

    const API = type === INVESTER ? invester : type === COMPANY ? company : null

    const getData = async() =>
    {
        const res = await fetchData(API);
        console.log(res);

        
    }

    useEffect(() =>{
        getData()
    },[type])

  return (
    <div className='border h-screen'>
      Crousal Component
    </div>
  )
}

export default CoCrousel
