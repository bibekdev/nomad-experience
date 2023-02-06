import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactStars from 'react-stars'
import QuickInquiry from './QuickInquiry'

const ProductCard = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-[265px]' key={content.id}>
      <div className='w-[265px] h-[320px] rounded-md overflow-hidden'>
        <Image
          src={content.image}
          width={265}
          height={320}
          className='w-full h-full'
        />
      </div>
      <div className='flex justify-between items-center mt-2'>
        <p className='text-sm text-dark-gray'>{content.country}</p>
        <ReactStars
          count={4}
          value={4}
          color1='#686868'
          color2='#FF3A43'
          edit={false}
        />
      </div>
      <h6 className='font-bold'>{content.name}</h6>
      <p className='text-[11px] text-dark-gray mt-1.5'>{content.days}</p>
      <div className='flex items-center justify-between mt-5'>
        <button className='w-[122px] h-[38px] text-center border border-primary text-primary rounded-md text-[12px] leading-4 font-semibold'>
          Show More
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className='w-[122px] h-[38px] text-center text-white rounded-md bg-primary text-[12px] leading-4 font-semibold'>
          Inquire Now
        </button>
      </div>

      <Dialog
        as='div'
        open={isOpen}
        className='relative z-10'
        onClose={() => setIsOpen(false)}>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left  shadow-xl transition-all'>
              <QuickInquiry tripName={`${content.name}, ${content.country}`} />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default ProductCard
