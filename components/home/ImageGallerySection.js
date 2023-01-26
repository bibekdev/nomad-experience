import Image from 'next/image'

const ImageGallerySection = () => {
  return (
    <>
      <div className='mt-10'>
        <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full'>
          Choose a Continent
        </h2>
        <div className='mx-auto w-[813px] mt-5 text-center font-medium text-xl h-[60px] text-[#1e1e1e] leading-[30px]'>
          <p>Nomads network naturally.</p>
          <p>It's part of their DNA, there 'way of being'.</p>
        </div>
        <p className='text-center text-base text-[#525252] w-full mt-[10px]'>
          Our relational network connects you with nomads on every continent.
        </p>
      </div>
      <div className='mx-[91px] flex justify-between mt-10'>
        <div className='flex flex-col gap-y-5'>
          <div className='w-[363px] h-[202px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/central-asia.jpg'
              width={363}
              height={202}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              Central Asia
            </p>
          </div>
          <div className='w-[363px] h-[202px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/north-europe.jpg'
              width={363}
              height={202}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              North Europe
            </p>
          </div>
          <div className='w-[363px] h-[202px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/sahel.jpg'
              width={363}
              height={202}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              The Sahel
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-y-6'>
          <div className='w-[490px] h-[312px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/south-east-asia.jpg'
              width={490}
              height={312}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              South East Asia
            </p>
          </div>
          <div className='w-[490px] h-[312px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/sahara.jpg'
              width={490}
              height={312}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              North Africa & The Sahara
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <div className='w-[363px] h-[202px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/middle-east.jpg'
              width={363}
              height={202}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              The Middle East
            </p>
          </div>
          <div className='w-[363px] h-[202px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/south-europe.jpg'
              width={363}
              height={202}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              South Europe
            </p>
          </div>
          <div className='w-[363px] h-[202px] rounded-md overflow-hidden relative drop-shadow-lg'>
            <Image
              src='/images/turkey.jpg'
              width={363}
              height={202}
              className='w-full h-full absolute inset-0 brightness-90'
              alt='photo'
            />
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              Turkey
            </p>
          </div>
        </div>
      </div>

      <button className='block mt-10 bg-primary font-bold w-[168px] h-[48px] text-center rounded-md mx-auto text-white'>
        Show All Places
      </button>
    </>
  )
}

export default ImageGallerySection
