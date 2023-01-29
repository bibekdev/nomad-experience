import React from 'react'
import Heading from '../common/Heading'
import Image from 'next/image'
import { BsPlayCircle } from 'react-icons/bs'

const AboutGallery = () => {
  return (
    <div className='mt-[80px] mx-[91px]'>
      <Heading>Share your Nomadic Experience</Heading>
      <p className='text-[20px] leading-[30px] text-center mt-5 text-light-gray'>
        Check out what our Nomads has to say about their experience
      </p>
      <div className='mt-[30px] flex justify-between gap-x-10'>
        <div className='w-[960px] h-[540.5px] relative rounded-md overflow-hidden'>
          <Image
            src='/images/Screenshot (1544).png'
            height={540}
            width={960}
            alt='photo'
            className='w-full h-full absolute inset-0'
          />
          <BsPlayCircle className='h-11 w-11 absolute z-10 top-[50%] left-[50%] cursor-pointer text-white -translate-x-2/4 -translate-y-2/4' />
        </div>
        <div className='flex gap-y-[34px] flex-col'>
          <div className='w-[300px] h-[157.15px] relative rounded-md overflow-hidden'>
            <Image
              src='/images/babak-fakhamzadeh-PO7CGnoDFUI-unsplash.jpg'
              width={300}
              height={157}
              alt='photo'
              className='w-full h-full absolute inset-0 brightness-90'
            />
            <BsPlayCircle className='h-5 w-5 absolute z-10 top-[50%] left-[50%] cursor-pointer text-white -translate-x-2/4 -translate-y-2/4' />
          </div>
          <div className='w-[300px] h-[157.15px] relative rounded-md overflow-hidden'>
            <Image
              src='/images/alex-vasey-5_Bu25SV6X8-unsplash.jpg'
              height={157}
              width={300}
              alt='photo'
              className='w-full h-full absolute inset-0 brightness-90'
            />
            <BsPlayCircle className='h-5 w-5 absolute z-10 top-[50%] left-[50%] cursor-pointer text-white -translate-x-2/4 -translate-y-2/4' />
          </div>
          <div className='w-[300px] h-[157.15px] relative rounded-md overflow-hidden'>
            <Image
              src='/images/caleb-george-iVXfOilGYHA-unsplash.jpg'
              width={300}
              height={157}
              alt='photo'
              className='w-full h-full absolute inset-0 brightness-90'
            />
            <BsPlayCircle className='h-5 w-5 absolute z-10 top-[50%] left-[50%] cursor-pointer text-white -translate-x-2/4 -translate-y-2/4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGallery
