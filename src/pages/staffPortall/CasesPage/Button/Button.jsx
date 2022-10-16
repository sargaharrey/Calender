/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Arrow from '@/assist/icons/arrow_white.svg'

const Button = () => {
    return (
        <>
            <div>
                <div className="blog_buttons justify-center flex-row-reverse">
                    <div className="blog_button rotate-180">
                        <img src={Arrow} alt=""/>
                    </div>
                    <div className="blog_number active_number">
                        <a className='font-semibold text-xl' href="#">1</a>
                    </div>

                    <div className="blog_number">
                        <a className='text-[#CAC7C7] font-semibold text-xl cursor-no-drop'  href="#">2</a>
                    </div>

                    <div className="blog_number">
                        <a className='text-[#CAC7C7] font-semibold text-xl cursor-no-drop' href="#">3</a>
                    </div>

                    <div className="blog_number">
                        <a className='text-[#CAC7C7] font-semibold text-xl cursor-no-drop'  href="#">4</a>
                    </div>

                    <div className="blog_number">
                        <a className='text-[#CAC7C7] font-semibold text-xl cursor-no-drop'  href="#">5</a>
                    </div>

                    <div className="blog_number">
                        <a className='text-[#CAC7C7] font-semibold text-xl cursor-no-drop'  href="#">6</a>
                    </div>

                    <div className="blog_button">
                        <img src={Arrow} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button