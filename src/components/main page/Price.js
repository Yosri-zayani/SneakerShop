import React from 'react';

const Price = ({price,discount}) => {
    let  initialPrice = price * ((100 + discount*2)/100) ; 
    return (
        <div className='md:inline md:ml-4 flex justify-between md:w-auto w-[90vw] ml-4 h-auto bg-white rounded-lg '>
        <div className='flex md:ml-4'>
            <div className=' md:text-5xl md:font-bold font-extrabold  mr-12  text-center text-2xl'>${price}.00 </div>
            <div className='ml-3 mt-1.5 rounded-lg pl-1.5 pr-1.5 text-sm text-center   text-lime-500 bg-lime-200'> {discount}%</div>
        </div>
        <div className=' md:ml-4 mr-4 mt-1.5  text-gray-400 line-through'>${initialPrice}.00</div>
    </div>
    );
}

export default Price;
