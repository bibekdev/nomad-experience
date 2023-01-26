import React from 'react'
import ReactStars from 'react-stars'

const ReviewCard = ({ image, description, name }) => {
  return (
    <div className='bg-white w-[330px] h-[274px] rounded-md z-50 shadow-lg shadow-gray-700'>
      <div className='flex items-center gap-x-4 pt-5 ml-8'>
        <img
          src={image}
          alt='photo'
          className='w-[40px] h-[40px] object-cover rounded-full '
        />
        <h6 className='font-semibold text-base'>{name}</h6>
      </div>
      <div className='mt-5 ml-4 flex text-[#FFCC00]'>
        <ReactStars
          count={5}
          value={4.5897}
          color1='#686868'
          color2='#ffc000'
          edit={false}
          half={true}
        />
      </div>
      <div className='mt-5 mx-[17px]'>
        <p className='text-sm w-[296px] text-left'>{description}</p>
      </div>
    </div>
  )
}

export default ReviewCard
