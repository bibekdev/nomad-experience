import Banner from '@/components/common/Banner'
import Head from 'next/head'

const Guides = () => {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Services</title>
      </Head>
      <Banner
        image='/images/sefa-yamak-_9dsTKvXowY-unsplash.jpg'
        title='Guides'
      />

      <div className='mt-[80px] grid mx-[91px] grid-rows-1 grid-cols-2'>
        <div>
          <h2 className='w-[509px] h-[120px] text-[40px] font-bold text-primary uppercase leading-[60px]'>
            Choose A CONTINENT
          </h2>
        </div>
        <div>
          <p className='text-lg text text-black-text font-normal'>
            Nomads network naturally. It’s part of their DNA, there ‘ way of
            being ’. Our relational network connects you with nomads on every
            continent.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Guides
