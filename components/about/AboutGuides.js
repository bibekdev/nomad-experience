import React from 'react'
import Heading from '../common/Heading'
import Image from 'next/image'

const AboutGuides = () => {
  return (
    <div className='mt-[80px] mx-[91px]'>
      <Heading>Our Tribal Guides</Heading>
      <p className='text-[20px] leading-[30px] text-center mt-5 text-light-gray'>
        Some will be independent local guides from among local nomads and their
        neighbours.
      </p>
      <div className='mt-[30px] flex justify-between'>
        {guides.map(guide => (
          <div
            key={guide.name}
            className='w-[254px] h-[361px] rounded-md shadow-xl shadow-gray-200 relative'>
            <Image
              src={guide.image}
              width={254}
              height={361}
              alt='photo'
              className='absolute object-center inset-0 w-full h-full rounded-md'
            />
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-6 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto text-center h-[24px] text-primary'>
                  {guide.name}
                </p>
                <p className='w-[178px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  {guide.job}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='block mt-20 bg-primary w-[168px] h-[45px] text-center rounded-md m-auto text-white'>
        View All
      </button>
      <div className='mb-20'></div>
    </div>
  )
}

const guides = [
  {
    name: 'Matt',
    job: 'Tour Coordinator & Community Champion',
    image: '/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
  },
  {
    name: 'Matt',
    job: 'Tour Coordinator & Community Champion',
    image: '/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
  },
  {
    name: 'Minu B',
    job: 'Tour Coordinator & Community Champion',
    image: '/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg',
  },
  {
    name: 'Shahzad',
    job: 'Regional Guide Community Sojorn Facilitator',
    image: '/images/Shahzad-tanga-apar.jpeg',
  },
]

export default AboutGuides
