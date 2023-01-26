import Footer from '@/components/common/Footer'
import FormControl from '@/components/common/FormControl'
import Navbar from '@/components/common/Navbar'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Booking</title>
      </Head>
      <div className='ml-[91px] mt-[41px] w-[85%] text-black'>
        <Navbar />
      </div>
      <h1 className='mt-[89px] ml-[91px] font-semibold text-[38px] leading-[57px] text-primary'>
        Booking Form
      </h1>
      <form className='ml-[91px] text-sm mb-[257px]'>
        <div className='mt-5 grid grid-flow-row grid-cols-3'>
          <FormControl label='Full Name' type='text' value='' name='' />
          <FormControl label='Email' type='email' value='' name='' />
          <FormControl label='Alternate Email' type='email' value='' name='' />
          <FormControl
            label='Phone No'
            subText='Include country code'
            type='text'
            value=''
            name=''
          />
          <FormControl
            label='Currently Living City and Address'
            type='text'
            value=''
            name=''
          />
          <FormControl
            label='Country'
            subText='According to your passport'
            type='text'
            value=''
            name=''
          />
          <div className='flex flex-col mt-7'>
            <label className='mb-5 font-medium text-base'>Trip Name:</label>
            <select
              placeholder='Select a option'
              className='w-[343px] h-[45px] text-[#686868] rounded-lg ring-1 ring-[#686868] focus:outline-none px-5 py-3 bg-[#fafafa]'>
              <option value=''>Select a option</option>
            </select>
          </div>
          <FormControl
            label='Number of Travellers'
            type='number'
            value=''
            name=''
          />
          <FormControl
            label='Estimated Days of Travel'
            type='number'
            value=''
            name=''
          />
          <FormControl label='Trip Date' type='date' value='' name='' />
        </div>
        <div className='mt-7 flex flex-col mb-[72px]'>
          <label className='mb-5 font-medium text-base'>Message:</label>
          <textarea className='text-[#686868] w-[784px] h-[247px] rounded-lg ring-1 ring-[#686868] focus:outline-none px-5 py-3 bg-[#fafafa]' />
        </div>
        <button
          type='submit'
          className='bg-primary text-[15px] leading-[22px] text-center w-[110px] h-[50px] rounded-md ml-[400px] text-white'>
          Submit
        </button>
      </form>

      <Footer />
    </>
  )
}

export default Contact
