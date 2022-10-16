import React from 'react';
import Welcome from '@/assist/images/Welcome.png';
import Table from '../Table/Table';
import './WelcomeSection.css';

const WelcomeSection = () => {
    return (
        <>
            <div className='relative top-[150px]'>
                <div className='px-[40px] welcomeAlign'>
                    <div className="text-center">
                        <div className='welcomeAlign'>
                            <img className='welcomeImg' alt="" src={Welcome}/>
                            <p className='welcomeP text-xl md:text-3xl'>مرحباً,  اهلاً بعودتك أ. ماجد بن طالب </p>
                        </div>
                    </div>
                    <div className='mt-24'>
                        <div className='flex justify-end border-b-2 border-[#AE965A99] pb-4'>
                            <h2 className='text-lg font-medium ml-8 cursor-pointer relative hover:text-gold duration-300'>الجلسات والقضايا المسندة الي</h2>
                            <h2 className='text-lg font-medium ml-8 cursor-pointer relative hover:text-gold duration-300 welcomeActive'>قضاياي </h2>
                        </div>
                    </div>
                    <Table />
                </div>
            </div>
        </>
    )
}

export default WelcomeSection