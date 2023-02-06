import React, { useState } from 'react'

const QuickInquiry = ({ tripName }) => {
  const [trip, setTrip] = useState(tripName)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log({
      trip,
      fullName,
      email,
      phone,
      message,
    })
  }

  return (
    <div className='relative w-[345px] rounded-md overflow-hidden shadow-md shadow-gray-400 ml-6'>
      <div className='absolute inset-0 bg-primary w-full h-[50px] text-center text-white text-lg py-3'>
        Quick Enquiry
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col mt-24 px-5 gap-y-3'>
        <input
          type='text'
          value={trip}
          onChange={e => setTrip(e.target.value)}
          className='w-full ring-[.5px] rounded-md px-3 py-2 ring-dark-gray focus:outline-none placeholder:text-[12px] text-[12px] placeholder:text-[#A69B9B] text-[#A69B9B]'
          placeholder='Trip Name'
        />
        <input
          type='text'
          onChange={e => setFullName(e.target.value)}
          className='w-full ring-[.5px] rounded-md px-3 py-2 ring-dark-gray focus:outline-none placeholder:text-[12px] text-[12px] placeholder:text-[#A69B9B] text-[#A69B9B]'
          placeholder='Full Name'
        />
        <input
          type='email'
          onChange={e => setEmail(e.target.value)}
          className='w-full ring-[.5px] rounded-md px-3 py-2 ring-dark-gray focus:outline-none placeholder:text-[12px] text-[12px] placeholder:text-[#A69B9B] text-[#A69B9B]'
          placeholder='Email'
        />
        <input
          type='text'
          onChange={e => setPhone(e.target.value)}
          className='w-full ring-[.5px] rounded-md px-3 py-2 ring-dark-gray focus:outline-none placeholder:text-[12px] text-[12px] placeholder:text-[#A69B9B] text-[#A69B9B]'
          placeholder='Phone No'
        />
        <textarea
          onChange={e => setMessage(e.target.value)}
          className='w-full ring-[.5px] rounded-md h-[118px] px-3 py-2 resize-none ring-dark-gray focus:outline-none placeholder:text-[12px] text-[12px] placeholder:text-[#A69B9B] text-[#A69B9B]'
          placeholder='Message'
        />
        <button
          type='submit'
          className='w-full text-white bg-primary h-[38px] text-center rounded-md text-sm mb-10'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default QuickInquiry
