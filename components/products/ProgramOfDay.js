import React from 'react'

const ProgramOfDay = () => {
  return (
    <div className='w-[1167px] mx-[91px]'>
      <h4 className='text-[38px] text-primary font-semibold mb-5'>
        Program of the day
      </h4>
      <ul className='flex items-center gap-x-[26px] text-dark-gray font-medium text-lg'>
        <li className='text-primary'>Day 1</li>
        <li>Day 2</li>
        <li>Day 3</li>
        <li>Day 4</li>
        <li>Day 5</li>
        <li>Day 6</li>
        <li>Day 7</li>
        <li>Day 8</li>
        <li>Day 9</li>
        <li>Day 10</li>
        <li>Day 11</li>
        <li>Day 12</li>
        <li>Day 13</li>
        <li>Day 14</li>
        <li>Day 15</li>
      </ul>
      <div className='w-full h-2 bg-[#C5C5C5] rounded-md relative overflow-hidden mt-4'>
        <div className='h-full bg-primary w-[52px] absolute inset-0 rounded-md'></div>
      </div>
      <p className='mt-5 text-[20px] font-semibold'>Day 1</p>
      <p className='mt-2 text-[#666] font-medium'>
        Arrival in Kathmandu (1,300m/4,264ft)
      </p>
    </div>
  )
}

export default ProgramOfDay
