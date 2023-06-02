import Image from 'next/image'
import React from 'react'
import Card from '../GetFamiliar/Card'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <div className='h-screen py-24 flex flex-row  rounded-3xl mx-8 px-12 bg-[#e0d7f7]'>
            <div className='flex flex-col  w-1/2'>
                <div className=''>
                    <h1 className='text-6xl text-start font-bold tracking-tight'>
                        Work with us
                    </h1>
                </div>
                <div className='my-6 z-50 overflow-hidden'>
                    
                    <div className='h-[300px] bg-white w-full'></div>
                    <div className='h-[300px] bg-white w-full'></div>

                </div>
            </div>
            <div className='flex flex-col px-12 w-1/2 overflow-hidden'>
                <div className='flex justify-end'>
                    <Image
                        width={180}
                        height={55}
                        alt='logo'
                        src={"/ahead-logo.svg"}
                    />
                </div>
                <div className='flex justify-end overflow-x-hidden overflow-y-scroll'>
                    <div className='flex flex-col px-12  gap-y-3'>
                        <div className='h-[150px] w-[300px] rounded-2xl bg-white'></div>
                        <div className='h-[150px] w-[300px] rounded-2xl bg-white'></div>
                        <div className='h-[150px] w-[300px] rounded-2xl bg-white'></div>
                        <div className='h-[150px] w-[300px] rounded-2xl bg-white'></div>
                        <div className='h-[150px] w-[300px] rounded-2xl bg-white'></div>
                        <div className='h-[150px] w-[300px] rounded-2xl bg-white'></div>
                        <div className='h-[150px] w-[300px] rounded-2xl bg-white'></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutUs