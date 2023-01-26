import Image from 'next/image'

const LatestBlogSection = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full'>
        Latest From Blog
      </h2>
      <div className='mx-[91px] flex mt-10'>
        <div className='w-1/2'>
          <div className='w-[608px] h-[341px] overflow-hidden rounded-md shadow-xl shadow-gray-200'>
            <Image
              src='/images/kalle-kortelainen-6F-uGWod7Xk-unsplash.jpg'
              width={608}
              height={341}
              className='w-full h-full object-cover'
              alt='photo'
            />
          </div>
          <h4 className='font-bold text-xl mt-8 mb-4'>
            Namche Bazaar Travel Guide
          </h4>
          <p className='text-base text-dark-gray w-[612px] text-justify mb-6 mr-2'>
            Namche Bazaar is one of the most important stops along the Everest
            trekking Trail. Known as the capital of the Sherpa homeland, Namche
            is a bustling town carved on the side of a mountain. The town is
            built like an amphitheater overlooking the snow-clad Kongde Ri,
            Kusum Kanguru, Kantega, and Thamserku. Khumbila, the holy mountain
            of the Sherpas, rises right above and stands guard over the
            settlement......
          </p>
          <a href='' className='text-primary text-base'>
            Read more
          </a>
        </div>
        <div className='w-1/2'>
          <div className='flex gap-x-10'>
            <div className='w-[220px] h-[180px] rounded-md shadow-xl overflow-hidden shadow-gray-200'>
              <Image
                src='/images/Narphu-valley-tilicho-lake-trek-hike-on-treks.jpg'
                width={220}
                height={180}
                className='w-full h-full object-cover'
                alt='photo'
              />
            </div>
            <div className='w-[350px]'>
              <h4 className='font-bold text-base leading-[25px]'>
                Nar Phu Valley – Hidden Jewel of Nepal Himalayas
              </h4>
              <p className='text-sm mt-2 mb-4 text-justify'>
                Nar Phu Valley is the hidden jewel of Nepal Himalaya. Located in
                the Annapurna Region, close to the Tibet border, this area is
                one of the last.......
              </p>
              <a href='' className='text-primary text-base'>
                Read more
              </a>
            </div>
          </div>
          <div className='flex gap-x-10 mt-8'>
            <div className='w-[220px] h-[180px] rounded-md shadow-xl overflow-hidden shadow-gray-200'>
              <Image
                src='/images/annapurna-base-camp-min.jpg'
                width={220}
                height={180}
                className='w-full h-full object-cover'
                alt='photo'
              />
            </div>
            <div className='w-[350px]'>
              <h4 className='font-bold text-base leading-[25px]'>
                Annapurna Base Camp
              </h4>
              <p className='text-sm mt-2 mb-4 text-justify'>
                The Annapurna Base Camp lies at the base of the tenth-highest
                mountain in the world, the Annapurna (8091m).It is the final
                destination of the.......
              </p>
              <a href='' className='text-primary text-base'>
                Read more
              </a>
            </div>
          </div>
          <div className='flex gap-x-10 mt-8'>
            <div className='w-[220px] h-[180px] rounded-md shadow-xl overflow-hidden shadow-gray-200'>
              <Image
                src='/images/howling-red-zATDM3xbOBI-unsplash.jpg'
                width={220}
                height={180}
                className='w-full h-full object-cover'
                alt='photo'
              />
            </div>
            <div className='w-[350px]'>
              <h4 className='font-bold text-base leading-[25px]'>
                Everest Base Camp
              </h4>
              <p className='text-sm mt-2 mb-4 text-justify'>
                Everest Base Camp, located at the foot of the world’s tallest
                mountain Mount Everest, is a dream destination for trekkers.
                Dubbed as one of the.......
              </p>
              <a href='' className='text-primary text-base'>
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestBlogSection
