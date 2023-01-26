import Image from 'next/image'

const LoyaltySection = () => {
  return (
    <>
      <div className='mt-10'>
        <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full'>
          Nomadic Loyalty
        </h2>
        <div className='mx-auto w-[813px] mt-5 text-center font-medium text-xl h-[120px] text-[#1e1e1e] leading-[30px]'>
          <p>Nomads have their own ways of deciding among themselves</p>
          <p>who should go, where, for how long, and why.</p>
          And when they return, they share those resources broadly within the
          community. And there always remains the banner or social covering.
        </div>
        <p className='text-center text-base text-[#525252] leading-[57px] h-[57px] w-full'>
          Nomads around the world have told me, "that is a fate worse than
          death".
        </p>
        <p className='text-center uppercase text-sm text-primary leading-[21px] h-[57px] w-full cursor-pointer'>
          View more
        </p>
      </div>

      <div className='flex justify-around mx-[91px] mt-8'>
        <div className='flex justify-evenly gap-x-3'>
          <div className='w-[183px] h-[250px] rounded-md overflow-hidden'>
            <Image
              src='/images/okwaeze-otusi-ZLAVr4QwIbA-unsplash.jpg'
              width={500}
              height={500}
              className='w-full'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold text-xl leading-[30px]'>
              <h4>Service &</h4> <h4>Trade Nomads</h4>
            </div>
            <p className='w-[177px] text-[11px] my-4'>
              Paving roads, working with metal, leather and other crafts,
              collecting, buying and selling, or any number of other services,
              these nomads are often urban and thrive in cities around the
              world, maybe even yours!
            </p>
            <a className='text-primary text-[11px] mt-2 leading-4' href='#'>
              View more...
            </a>
          </div>
        </div>
        <div className='flex justify-evenly gap-x-3'>
          <div className='rounded-md overflow-hidden w-[183px] h-[250px]'>
            <Image
              src='/images/masoud-momenian-1NRJxv4BJAU-unsplash.jpg'
              width={500}
              height={500}
              className='w-full'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold w-[176px] text-xl leading-[30px]'>
              <h4>Agro- </h4> <h4>Pastoral Nomads</h4>
            </div>
            <p className='w-[177px] text-[11px] my-6'>
              Often combining small scale farming with larger scale animal
              herding these nomads are sometimes hard to distinguish from
              traditionally settled farmers
            </p>
            <a className='text-primary text-[11px] mt-2 leading-4' href='#'>
              View more...
            </a>
          </div>
        </div>
        <div className='flex justify-evenly gap-x-3'>
          <div className='rounded-md overflow-hidden w-[183px] h-[250px]'>
            <Image
              src='/images/janko-ferlic-3cGIfBWmoms-unsplash.jpg'
              width={500}
              height={500}
              className='w-full'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold text-xl leading-[30px]'>
              <h4>Hunter &</h4>
              <h4>Collector Nomads</h4>
            </div>
            <p className='w-[177px] text-[11px] my-6'>
              Even this is not necessarily what you might have guessed. In
              Africa and Asia some traditional "Hunter-Gatherers" are among the
              wealthiest and most educated peoples of the world!
            </p>
            <a className='text-primary text-[11px] mt-2 leading-4' href='#'>
              View more...
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoyaltySection
