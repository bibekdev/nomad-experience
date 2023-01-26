import { BiCaretDown } from 'react-icons/bi'
import { TfiCalendar, TfiSearch } from 'react-icons/tfi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import Navbar from '../common/Navbar'
import Image from 'next/image'

const HomeBanner = () => {
  return (
    <div className='h-[640px] w-full bg-cover bg-center relative text-white overflow-x-hidden'>
      <Image
        src='/images/pawel-janiak-FOa_hZ1bxiI-unsplash.jpg'
        height={640}
        width={1444}
        alt='background'
        className='w-full h-full object-cover absolute inset-0 brightness-90'
      />
      <div className='absolute left-[91px] top-[41px] w-[85%]'>
        <Navbar />
      </div>
      <div className='absolute top-[231px] left-[400px] text-center '>
        <p className='uppercase text-[22px] font-medium leading-[33px]'>
          Open your mind to
        </p>
        <h1 className='font-bold text-[42px] leading-[63px]'>
          The Hidden World Of Nomads
        </h1>
      </div>

      <div className='absolute bottom-[97px] left-[91px] flex gap-x-5'>
        <div className='bg-white rounded-2xl w-[1000px] h-[90px] px-14 py-5 flex justify-between'>
          <div className='flex items-center gap-x-7'>
            <div className='text-black'>
              <TfiSearch className='h-7 w-7' />
            </div>
            <div className='text-black'>
              <h6 className='text-base font-medium mb-2'>Select your region</h6>
              <div className='flex items-center gap-x-5'>
                <p className='font-normal text-[#525252] text-sm'>Continent</p>
                <BiCaretDown className='h-4 w-4 cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-x-7'>
            <div className='text-black'>
              <TfiCalendar className='h-7 w-7' />
            </div>
            <div className='text-black'>
              <h6 className='text-base font-medium mb-2'>
                When are you available?
              </h6>
              <div className='flex items-center gap-x-5'>
                <p className='font-normal text-sm text-[#525252]'>
                  Select a date
                </p>
                <BiCaretDown className='h-4 w-4 cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-x-7'>
            <div className='text-black'>
              <MdOutlinePeopleAlt className='h-7 w-7' />
            </div>
            <div className='text-black'>
              <h6 className='text-base font-medium mb-2'>
                How many Guest are going?
              </h6>
              <div className='flex items-center gap-x-5'>
                <p className='font-normal text-[#525252] text-sm'>Guests</p>
                <BiCaretDown className='h-4 w-4 cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
        <button className='bg-primary text-white w-[200px] h-[90px] rounded-2xl text-center'>
          Search
        </button>
      </div>
    </div>
  )
}

export default HomeBanner
