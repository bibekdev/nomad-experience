import Image from 'next/image'
import Navbar from './Navbar'

const Banner = ({ image, title }) => {
  return (
    <div className='h-[450px] w-full relative text-white overflow-x-hidden'>
      <Image
        src={image}
        height={450}
        width={1444}
        priority={true}
        alt='background'
        className='w-full h-full object-cover absolute inset-0 brightness-75'
      />
      <div className='absolute left-[91px] top-[41px] w-[85%]'>
        <Navbar />
      </div>
      <h1 className='absolute left-[91px] bottom-12 leading-[63px] text-[42px] font-bold '>
        {title}
      </h1>
    </div>
  )
}

export default Banner
