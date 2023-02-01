import React from 'react'

const Inquiry = () => {
  return (
    <div>
      <p className='text-[#212121]'>Planning a Nepal Trip?</p>
      <p className='text-primary uppercase text-[26px] font-semibold'>
        Make An Inquiry
      </p>
      <form className='mt-3 flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-1 text-[13px]'>
          <label className='uppercase'>Full Name(Required)</label>
          <input
            type='text'
            className='w-[240px] h-[33px] text-sm resize-none bg-[#F4F4F4] outline-none rounded-sm px-3 py-3 text-black-text'
          />
        </div>
        <div className='flex flex-col gap-y-1 text-[13px]'>
          <label className='uppercase'>Email Address(Required)</label>
          <input
            type='text'
            className='w-[240px] h-[33px] text-sm resize-none bg-[#F4F4F4] outline-none rounded-sm px-3 py-3 text-black-text'
          />
        </div>
        <div className='flex flex-col gap-y-1 text-[13px]'>
          <label className='uppercase'>Phone Number</label>
          <input
            type='text'
            className='w-[240px] h-[33px] text-sm resize-none bg-[#F4F4F4] outline-none rounded-sm px-3 py-3 text-black-text'
          />
        </div>
        <div className='flex flex-col gap-y-1 text-[13px]'>
          <label className='uppercase'>Number of People</label>
          <input
            type='text'
            className='w-[240px] h-[33px] text-sm resize-none bg-[#F4F4F4] outline-none rounded-sm px-3 py-3 text-black-text'
          />
        </div>
        <div className='flex flex-col gap-y-1 text-[13px]'>
          <label className='uppercase'>Message</label>
          <input
            type='text'
            className='w-[240px] h-[33px] text-sm resize-none bg-[#F4F4F4] outline-none rounded-sm px-3 py-3 text-black-text'
          />
        </div>
      </form>
    </div>
  )
}

export default Inquiry
