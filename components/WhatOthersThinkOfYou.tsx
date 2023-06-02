"use client"
import React from 'react'
import { GiUbisoftSun } from 'react-icons/gi'

const WhatOthersThinkOfYou = () => {
  return (
    <div className='px-28 h-screen rounded-3xl bg-[#e1fafa] w-full'>
      <div className=''>
        <h3 className='font-semibold'>Let your friends, family, and co-workers (anonymously) rate your social skills.</h3>
        <h1 className='font-bold'>Ever wondered what others think of you?</h1>
      </div>
      <div>
        <div className='w-full h-full'>
          <span className='z-100 rounded-full absolute text-black  bg-[#cf783e] h-5 w-5'>1</span>
          <GiUbisoftSun className='absolute text-5xl' />
        </div>

      </div>
      <div></div>

    </div>
  )
}

export default WhatOthersThinkOfYou 