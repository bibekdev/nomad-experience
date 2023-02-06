import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const HomeAdventureSection = () => {
  const { push } = useRouter()
  return (
    <div className='h-[432px] w-full relative text-white mt-20'>
      <Image
        src='/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg'
        height={640}
        width={1444}
        alt='background'
        className='w-full h-full object-cover absolute inset-0 brightness-75'
      />
      <div className='absolute top-32 left-24 text-white'>
        <h4 className='font-semibold text-[22px] leading-[33px]'>ADVENTURE</h4>
        <h2 className='text-[42px] leading-[63px] font-bold'>
          Yours Perfect Explore Destinations
        </h2>
        <p className='text-lg leading-[27px]'>Activities & Accommodations</p>
        <button
          onClick={() => push('/services')}
          className='text-[15px] leading-6 rounded px-6 mt-4 text-center bg-primary py-3'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HomeAdventureSection
