"use client"
import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { GiUbisoftSun } from 'react-icons/gi'
function getRandomColor() {
  // Generate a random hue value between 0 and 360
  const hue = Math.floor(Math.random() * 361);

  // Convert the hue value to an HSL color string
  const color = `hsl(${hue}, 100%, 50%)`;

  return color;
}
const WhatOthersThinkOfYou = () => {

  return (
    <div className='p-12 flex flex-col items-center justify-between h-full rounded-3xl bg-[#e1fafa] mx-8'>
      <div className='m-12 h-fit flex flex-col whitespace-nowrap items-center justify-between align-middle'>
        <h3 className='font-medium text-center min-w-full  text-xl'>Let your friends, family, and co-workers (anonymously) rate your social skills.</h3>
        <h1 className='font-bold my-6 text-5xl min-w-full'>Ever wondered what others think of you?</h1>
      </div>

      <div className='relative w-full flex items-center justify-start  h-[100px] mb-14'>
        <div className='flex flex-col w-1/3 overflow-hidden'>
          <motion.div
            initial={{
              scale: 0,
              opacity: 0
            }}
            whileInView={{
              scale: 1.1,
              opacity: 1,  
              transition: {
                duration: 1
              }
            }}
            className='w-full flex overflow-hidden  items-center justify-center h-full'>
            <GiUbisoftSun className='relative text-[#f8af7e] mx-auto' fontSize={80} />
            <div className='absolute z-0 border-4 border-[#f8af7e] w-full' />
            <span className='absolute items-center justify-center rounded-full text-center text-white text-2xl flex bg-[#cf783e] h-12 w-12 font-bold'>1</span>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              },
            }}
            whileInView={{
              opacity: 1,
              scale: 1.1,
            }}
            className='text-sm px-6 text-center font-medium'>
            Answer questions on your social skills
          </motion.p>
        </div>
        
        <div className='flex flex-col w-1/3'>
          <motion.div
            initial={{
              scale: 0,
              opacity: 0
            }}
            whileInView={{
              scale: 1.1,
              opacity: 1,  
              transition: {
                duration: 1
              }
            }}
            className='w-full flex overflow-hidden  items-center justify-center h-full'>
            <GiUbisoftSun className='relative text-[#f8af7e] mx-auto' fontSize={80} />
            <div className='absolute z-0 border-4 border-[#f8af7e] w-full' />
            <span className='absolute items-center justify-center rounded-full text-center text-white text-2xl flex bg-[#cf783e] h-12 w-12 font-bold'>1</span>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              },
            }}
            whileInView={{
              opacity: 1,
              scale: 1.1,
            }}
            className='text-sm px-6 text-center font-medium'>
            Answer questions on your social skills
          </motion.p>
        </div>
        
        <div className='flex flex-col w-1/3'>
          <motion.div
            initial={{
              scale: 0,
              opacity: 0
            }}
            whileInView={{
              scale: 1.1,
              opacity: 1,  
              transition: {
                duration: 1
              }
            }}
            className='w-full flex overflow-hidden  items-center justify-center h-full'>
            <GiUbisoftSun className='relative text-[#f8af7e] mx-auto' fontSize={80} />
            <div className='absolute z-0 border-4 border-[#f8af7e] w-full' />
            <span className='absolute items-center justify-center rounded-full text-center text-white text-2xl flex bg-[#cf783e] h-12 w-12 font-bold'>1</span>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              },
            }}
            whileInView={{
              opacity: 1,
              scale: 1.1,
            }}
            className='text-sm px-6 text-center font-medium'>
            Answer questions on your social skills
          </motion.p>
        </div>
        
      </div>

      <div className='w-2/3 h-[250px] flex flex-col items-center justify-center '>
        <div className='relative flex-col items-center justify-center align-middle bg-white w-full h-full shadow-lg rounded-xl gap-y-2 flex'>
          <div className='flex min-w-full justify-between flex-row'>
            <Button title='You' />
            <Button title='Annoymonos 3' />
          </div>

          <div className='flex w-full shrink-0 max-w-[90%] flex-row relative items-center justify-between h-12'>
            <div className='border absolute w-full' />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </div>
          <div className='flex min-w-full justify-evenly flex-row'>
            <Button title='Anonymonos 2' />
            <Button title='annoymonos 3' />
          </div>

        </div>

      </div>
    </div>
  )
}

const Button = ({ title }: { title: string }) => (
  <motion.button
    style={{ backgroundColor: `${getRandomColor()}` }}
    initial={{
      opacity: 0,
      scale: 0
    }}
    transition={{
      duration: 0.7,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      },
    }}
    whileInView={{
      opacity: 1,
      scale: 1.1,
    }}
    className={`relative rounded-xl w-fit h-fit px-3 py-1`}>
    <p className='text-white font-medium m-1'>{title}</p>
  </motion.button>
)
const Circle = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1, backgroundColor: getRandomColor() }}
    transition={{
      duration: 0.7,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      },

    }}
    className='relative h-6 w-6 z-10 rounded-full' />
)

export default WhatOthersThinkOfYou 