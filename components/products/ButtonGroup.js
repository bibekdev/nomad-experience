import React from 'react'

const ButtonGroup = () => {
  return (
    <div className='flex items-center gap-x-[30px] mt-5'>
      <button className='w-[168px] h-[48px] text-center border border-primary text-primary rounded-md text-[15px] leading-4 font-semibold'>
        Inquire Now
      </button>
      <button className='w-[168px] h-[48px] text-center text-white rounded-md bg-primary text-[15px] leading-4 font-semibold'>
        Book Now
      </button>
    </div>
  )
}

export default ButtonGroup
