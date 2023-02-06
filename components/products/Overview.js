import React from 'react'

const Overview = () => {
  return (
    <div className='w-[801px]'>
      <div className='flex justify-between items-end'>
        <h4 className='text-[38px] text-primary font-semibold'>Overview</h4>
        <p className='text-base'>
          <span className='text-primary'>Departures: </span>
          <span className='text-[#525252]'>Any date on request</span>
        </p>
      </div>
      <p className='text-justify mb-2 text-[#666] mt-5 leading-6'>
        Our Everest Base Camp is a moderate trekking route lead by a local
        English speaking sherpa/guide. You will experience the jaw-dropping
        views of the majestic Himalayan range enriched by the local traditions
        and cultures of the communities that call these mountains home. On this
        14 day trip you will be accommodated at local Teahouses what will
        provide you with hearty meals, fueling you as you walk in the shadows of
        the worlds tallest peaks.
      </p>
      <a href='' className='text-sm text-primary'>
        View All
      </a>
    </div>
  )
}

export default Overview
