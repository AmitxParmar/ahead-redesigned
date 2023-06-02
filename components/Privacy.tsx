import React from 'react'

type Props = {}

const Privacy = (props: Props) => {
    return (
        <div className='rounded-3xl flex px-12 py-28 bg-green-200 mx-8' >
            <div className='flex gap-y-4 flex-col text-center py-12 items-center justify-center  px-[20%]'>
                <h4 className='font-medium text-lg'>We take privacy seriously</h4>
                <h3 className='text-3xl font-bold'>Before we get Started</h3>
                <q className='text-2xl text-gray-500 leading-relaxed'>
                    We won&apos;t share your answers with anyone (and won&apos;t ever tell you which friends said what about you)
                </q>

                <div className='mt-4'>
                    <p className='text-xl'>with love, <span>_____</span></p>
                </div>
               
                <div className='flex flex-col mt-12 items-center gap-5'>
                    <div className="rounded-full overflow-hidden bg-black text-white  hover:bg-black/50 hover:shadow-lg border">
                        <button className="px-6 py-4 tracking-wide">
                            <p className="font-medium items-center my-auto">
                                Start a test</p>
                        </button>
                    </div>
                    <p className='text-gray-600'>Take only 5 minutes</p>
                </div>
                
            </div>
        </div>
    )
}

export default Privacy;