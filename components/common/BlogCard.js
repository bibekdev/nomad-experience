import Image from 'next/image'
import React from 'react'

const BlogCard = () => {
  return (
    <div className='w-[400px]'>
      <div className='w-[400] h-[300px] rounded-md overflow-hidden shadow-md shadow-gray-400'>
        <Image
          src='/images/Narphu-valley-tilicho-lake-trek-hike-on-treks.jpg'
          width={400}
          height={300}
          className='w-full h-full object-cover'
          alt='photo'
        />
      </div>
      <p className='mt-6 text-[15px] leading-[25px] font-semibold'>
        Nar Phu Valley – Hidden Jewel of Nepal Himalayas
      </p>
      <p className='mt-2 text-[13px] text-dark-gray font-medium'>
        Nar Phu Valley is the hidden jewel of Nepal Himalaya. Located in the
        Annapurna Region, close to the Tibet border, this area is one of the
        last.......
      </p>
      <a href='' className='mt-[15px] text-primary text-[11px]'>
        Read more
      </a>
    </div>
  )
}

export default BlogCard
