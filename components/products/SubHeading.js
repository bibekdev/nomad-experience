import { CiDollar, CiClock2 } from 'react-icons/ci'
import ReactStars from 'react-stars'

const SubHeading = () => {
  return (
    <div className='mx-[91px] flex items-center justify-between'>
      <div>
        <p className='font-medium text-[20px]'>Nepal, South East Asia</p>
      </div>
      <div className='flex gap-x-5'>
        <div className='flex items-center gap-x-2'>
          <CiDollar className='w-[40px] h-[40px] text-primary' />
          <div className='text-sm'>
            <p className='text-medium'>Price</p>
            <p>
              <span className='text-[#9999]'>From </span>
              <span className='text-primary'>$173.00</span>
            </p>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <CiClock2 className='w-[40px] h-[40px] text-primary' />
          <div className='text-sm'>
            <p className='text-medium'>Duration</p>
            <p className='text-primary'>12 days</p>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <div></div>
          <div className='text-sm'>
            <p className='text-medium'>Reviews</p>
            <div className='flex gap-x-1'>
              <ReactStars
                color1='#525252'
                color2='#FF3A43'
                value={4.5}
                count={5}
                edit={false}
              />
              <p className='text-[#999999]'>8 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHeading
