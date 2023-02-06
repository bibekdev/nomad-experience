import Image from 'next/image'

const ProductBlog = () => {
  return (
    <div className='mt-[70px] ml-6'>
      <p className='font-medium mb-5'>Related Blog</p>
      <div className='w-[345px]'>
        <div className='w-[345px] h-[258.75px] rounded-md overflow-hidden shadow-md shadow-gray-400'>
          <Image
            src='/images/Narphu-valley-tilicho-lake-trek-hike-on-treks.jpg'
            width={400}
            height={258.75}
            className='w-full h-full object-cover'
            alt='photo'
          />
        </div>
        <p className='mt-6 text-[15px] leading-[25px] font-semibold'>
          Everest Base Camp
        </p>
        <p className='mt-2 text-[13px] text-dark-gray font-medium'>
          Everest Base Camp, located at the foot of the world’s tallest mountain
          Mount Everest, is a dream destination for trekkers.
        </p>
        <a href='' className='mt-[15px] text-primary text-[11px]'>
          Read more
        </a>
      </div>
    </div>
  )
}

export default ProductBlog
