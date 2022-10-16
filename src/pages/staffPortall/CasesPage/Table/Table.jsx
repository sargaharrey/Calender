import React from 'react';
import Circle from '@/assist/images/ArrowCircle.png';
import ArrowDown from '@/assist/icons/ArrowDown.svg';
import ArrowUp from '@/assist/icons/ArrowUp.svg';
import Search from '@/assist/icons/search.svg';
import './Table.css';
import Button from '../Button/Button';
import TableData from './TableData';


const Table = () => {
    return (
        <>
            <div className='mt-12 overflow-auto'>
                <div className='flex flex-col md:flex-row-reverse justify-between'>

                    <div className='flex flex-row-reverse items-center mt-4 md:mt-0'>
                        <div className='relative'>
                            <div>
                                <img src={Circle} alt="" />
                            </div>
                            <div>
                                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[180%] cursor-pointer' alt="" src={ArrowUp}/>
                                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer' alt="" src={ArrowDown}/>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-semibold mr-4'>عرض 1-22 من 500 النتائج</h3>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center'>
                        <div className='relative'>
                            <input placeholder='نص العنصر النائب' className='border-gold border-[3px] rounded-full md:px-6 py-1 text-end' type="text" />
                            <img className='absolute top-1/2 left-[5%] -translate-y-1/2' src={Search} alt="" />
                        </div>
                        <div className='text-white bg-gold rounded-full p-2 mr-4 cursor-pointer'>
                            <h3> + إضافة قضية جديدة </h3>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div>
                    <div className="overflow-x-auto">
                        <TableData />
                    </div>


                    </div>
                </div>
                <Button />
            </div>
        </>
    )
}

export default Table