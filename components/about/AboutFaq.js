import React from 'react'
import { BiCaretDown } from 'react-icons/bi'

const AboutFaq = () => {
  return (
    <div className='mx-[91px] mt-[80px] mb-[91px]'>
      <h2 className='font-semibold text-[38px] leading-[57px] text-primary'>
        FAQ's
      </h2>
      <div className='mt-[30px]'>
        <div className='flex flex-col gap-y-9'>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>How can we reach Nomad?</h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
            <p className='w-[893px] text-lg mt-3'>
              Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor
              sit amet. Placeat nostrud natus tempora justo nostrud natus
              tempora.
            </p>
          </div>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>How can we book?</h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
          </div>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>
                Can I take photographs during my Vacation?
              </h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
          </div>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>
                How experienced are the Tribal Scouts?
              </h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
          </div>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>
                I am a Solo traveler. May I join the group for Scouts?
              </h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
          </div>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>
                Can we charter a private helicopter tour to Annapurna Base Camp?
              </h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
          </div>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>
                Does weather affect the helicopter flight to Annapurna Base
                Camp?
              </h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
          </div>
          <div>
            <div className='flex gap-x-5 items-center cursor-pointer'>
              <h6 className='font-medium text-xl'>
                Is Annapurna Base Camp Helicopter Tour safe?
              </h6>
              <BiCaretDown className='w-5 h-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFaq
