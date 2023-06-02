import React from 'react'

type Props = {}

const Careers = (props: Props) => {
    return (
        <div className='mx-auto flex flex-col my-16 py-4 px-16'>
            <div className='px-4 mb-16'>
                <p className='text-5xl  font-bold'>
                    Open vacancies
                </p>

            </div>
            <div className='flex flex-row justify-around items-center w-full px-16'>
                <div className='w-1/3 px-4 leading-loose flex flex-col justify-center'>
                    <p className='text-xl mb-2 font-semibold'>Senior Full-Stack Engineer</p>
                    <ul className='list-disc px-5'>
                        <li >Full time position</li>
                        <li >Full time position</li>
                        <li >Full time position</li>
                    </ul>
                </div>
                <div className='w-1/3 leading-loose px-4 flex flex-col justify-center'>
                    <p className='text-xl mb-2 font-semibold'>Senior Full-Stack Engineer</p>
                    <ul className='list-disc px-5'>
                        <li >Full time position</li>
                        <li >Full time position</li>
                        <li >Full time position</li>
                    </ul>
                </div>
                <div className='w-1/3 leading-loose px-4 flex flex-col justify-center'>
                    <p className='text-xl mb-2 font-semibold'>Senior Full-Stack Engineer</p>
                    <ul className='list-disc px-5'>
                        <li >Full time position</li>
                        <li >Full time position</li>
                        <li >Full time position</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Careers