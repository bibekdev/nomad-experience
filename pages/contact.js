import Footer from '@/components/common/Footer'
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

      <Footer />
    </>
  )
}

export default Contact
