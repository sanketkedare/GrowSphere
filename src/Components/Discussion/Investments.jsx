import React from 'react'
import useNotification from '../../Hooks/useNotification';

const Investments = () => 
{
  const Investments = useNotification() || [];
// const Investments = [];


  return (
    <div className=''>
        <h1 className='text-xl py-3 font-bold'>Investments In Your Company</h1>
        <div className='flex justify-center items-center min-h-[300px] bg-black'>
        {
            Investments.length > 0 ? (
                <div>

                </div>
            ) : (
                <h1>No any Investments Yet.</h1>
            )
        }
         </div>

    </div>
  )
}

export default Investments
